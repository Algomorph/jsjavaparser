    test("Snowball Danish", function(assert) {
      var src = multiline(function(){/*

        // This file was generated automatically by the Snowball to Java compiler

        package org.tartarus.snowball.ext;

        import org.tartarus.snowball.Among;


        public class SnowballProgram {
            protected SnowballProgram()
            {
          current = new StringBuffer();
          setCurrent("");
            }

            /**
             * Set the current string.
             *\/
            public void setCurrent(String value)
            {
          current.replace(0, current.length(), value);
          cursor = 0;
          limit = current.length();
          limit_backward = 0;
          bra = cursor;
          ket = limit;
            }

            /**
             * Get the current string.
             *\/
            public String getCurrent()
            {
                String result = current.toString();
                // Make a new StringBuffer.  If we reuse the old one, and a user of
                // the library keeps a reference to the buffer returned (for example,
                // by converting it to a String in a way which doesn't force a copy),
                // the buffer size will not decrease, and we will risk wasting a large
                // amount of memory.
                // Thanks to Wolfram Esser for spotting this problem.
                current = new StringBuffer();
                return result;
            }

            // current string
            protected StringBuffer current;

            protected int cursor;
            protected int limit;
            protected int limit_backward;
            protected int bra;
            protected int ket;

            protected void copy_from(SnowballProgram other)
            {
          current          = other.current;
          cursor           = other.cursor;
          limit            = other.limit;
          limit_backward   = other.limit_backward;
          bra              = other.bra;
          ket              = other.ket;
            }

            protected boolean in_grouping(char [] s, int min, int max)
            {
          if (cursor >= limit) return false;
          char ch = current.charAt(cursor);
          if (ch > max || ch < min) return false;
          ch -= min;
          if ((s[ch >> 3] & (0X1 << (ch & 0X7))) == 0) return false;
          cursor++;
          return true;
            }

            protected boolean in_grouping_b(char [] s, int min, int max)
            {
          if (cursor <= limit_backward) return false;
          char ch = current.charAt(cursor - 1);
          if (ch > max || ch < min) return false;
          ch -= min;
          if ((s[ch >> 3] & (0X1 << (ch & 0X7))) == 0) return false;
          cursor--;
          return true;
            }

            protected boolean out_grouping(char [] s, int min, int max)
            {
          if (cursor >= limit) return false;
          char ch = current.charAt(cursor);
          if (ch > max || ch < min) {
              cursor++;
              return true;
          }
          ch -= min;
          if ((s[ch >> 3] & (0X1 << (ch & 0X7))) == 0) {
              cursor ++;
              return true;
          }
          return false;
            }

            protected boolean out_grouping_b(char [] s, int min, int max)
            {
          if (cursor <= limit_backward) return false;
          char ch = current.charAt(cursor - 1);
          if (ch > max || ch < min) {
              cursor--;
              return true;
          }
          ch -= min;
          if ((s[ch >> 3] & (0X1 << (ch & 0X7))) == 0) {
              cursor--;
              return true;
          }
          return false;
            }

            protected boolean in_range(int min, int max)
            {
          if (cursor >= limit) return false;
          char ch = current.charAt(cursor);
          if (ch > max || ch < min) return false;
          cursor++;
          return true;
            }

            protected boolean in_range_b(int min, int max)
            {
          if (cursor <= limit_backward) return false;
          char ch = current.charAt(cursor - 1);
          if (ch > max || ch < min) return false;
          cursor--;
          return true;
            }

            protected boolean out_range(int min, int max)
            {
          if (cursor >= limit) return false;
          char ch = current.charAt(cursor);
          if (!(ch > max || ch < min)) return false;
          cursor++;
          return true;
            }

            protected boolean out_range_b(int min, int max)
            {
          if (cursor <= limit_backward) return false;
          char ch = current.charAt(cursor - 1);
          if(!(ch > max || ch < min)) return false;
          cursor--;
          return true;
            }

            protected boolean eq_s(int s_size, String s)
            {
          if (limit - cursor < s_size) return false;
          int i;
          for (i = 0; i != s_size; i++) {
              if (current.charAt(cursor + i) != s.charAt(i)) return false;
          }
          cursor += s_size;
          return true;
            }

            protected boolean eq_s_b(int s_size, String s)
            {
          if (cursor - limit_backward < s_size) return false;
          int i;
          for (i = 0; i != s_size; i++) {
              if (current.charAt(cursor - s_size + i) != s.charAt(i)) return false;
          }
          cursor -= s_size;
          return true;
            }

            protected boolean eq_v(CharSequence s)
            {
          return eq_s(s.length(), s.toString());
            }

            protected boolean eq_v_b(CharSequence s)
            {   return eq_s_b(s.length(), s.toString());
            }

            protected int find_among(Among v[], int v_size)
            {
          int i = 0;
          int j = v_size;

          int c = cursor;
          int l = limit;

          int common_i = 0;
          int common_j = 0;

          boolean first_key_inspected = false;

          while(true) {
              int k = i + ((j - i) >> 1);
              int diff = 0;
              int common = common_i < common_j ? common_i : common_j; // smaller
              Among w = v[k];
              int i2;
              for (i2 = common; i2 < w.s_size; i2++) {
            if (c + common == l) {
                diff = -1;
                break;
            }
            diff = current.charAt(c + common) - w.s[i2];
            if (diff != 0) break;
            common++;
              }
              if (diff < 0) {
            j = k;
            common_j = common;
              } else {
            i = k;
            common_i = common;
              }
              if (j - i <= 1) {
            if (i > 0) break; // v->s has been inspected
            if (j == i) break; // only one item in v

            // - but now we need to go round once more to get
            // v->s inspected. This looks messy, but is actually
            // the optimal approach.

            if (first_key_inspected) break;
            first_key_inspected = true;
              }
          }
          while(true) {
              Among w = v[i];
              if (common_i >= w.s_size) {
            cursor = c + w.s_size;
            if (w.method == null) return w.result;
            boolean res;
            try {
                Object resobj = w.method.invoke(w.methodobject,
                        new Object[0]);
                res = resobj.toString().equals("true");
            } catch (InvocationTargetException e) {
                res = false;
                // FIXME - debug message
            } catch (IllegalAccessException e) {
                res = false;
                // FIXME - debug message
            }
            cursor = c + w.s_size;
            if (res) return w.result;
              }
              i = w.substring_i;
              if (i < 0) return 0;
          }
            }

            // find_among_b is for backwards processing. Same comments apply
            protected int find_among_b(Among v[], int v_size)
            {
          int i = 0;
          int j = v_size;

          int c = cursor;
          int lb = limit_backward;

          int common_i = 0;
          int common_j = 0;

          boolean first_key_inspected = false;

          while(true) {
              int k = i + ((j - i) >> 1);
              int diff = 0;
              int common = common_i < common_j ? common_i : common_j;
              Among w = v[k];
              int i2;
              for (i2 = w.s_size - 1 - common; i2 >= 0; i2--) {
            if (c - common == lb) {
                diff = -1;
                break;
            }
            diff = current.charAt(c - 1 - common) - w.s[i2];
            if (diff != 0) break;
            common++;
              }
              if (diff < 0) {
            j = k;
            common_j = common;
              } else {
            i = k;
            common_i = common;
              }
              if (j - i <= 1) {
            if (i > 0) break;
            if (j == i) break;
            if (first_key_inspected) break;
            first_key_inspected = true;
              }
          }
          while(true) {
              Among w = v[i];
              if (common_i >= w.s_size) {
            cursor = c - w.s_size;
            if (w.method == null) return w.result;

            boolean res;
            try {
                Object resobj = w.method.invoke(w.methodobject,
                        new Object[0]);
                res = resobj.toString().equals("true");
            } catch (InvocationTargetException e) {
                res = false;
                // FIXME - debug message
            } catch (IllegalAccessException e) {
                res = false;
                // FIXME - debug message
            }
            cursor = c - w.s_size;
            if (res) return w.result;
              }
              i = w.substring_i;
              if (i < 0) return 0;
          }
            }

            /* to replace chars between c_bra and c_ket in current by the
             * chars in s.
             *\/
            protected int replace_s(int c_bra, int c_ket, String s)
            {
          int adjustment = s.length() - (c_ket - c_bra);
          current.replace(c_bra, c_ket, s);
          limit += adjustment;
          if (cursor >= c_ket) cursor += adjustment;
          else if (cursor > c_bra) cursor = c_bra;
          return adjustment;
            }

            protected void slice_check()
            {
          if (bra < 0 ||
              bra > ket ||
              ket > limit ||
              limit > current.length())   // this line could be removed
          {
              System.err.println("faulty slice operation");
          // FIXME: report error somehow.
          /*
              fprintf(stderr, "faulty slice operation:\\n");
              debug(z, -1, 0);
              exit(1);
              *\/
          }
            }

            protected void slice_from(String s)
            {
          slice_check();
          replace_s(bra, ket, s);
            }

            protected void slice_from(CharSequence s)
            {
                slice_from(s.toString());
            }

            protected void slice_del()
            {
          slice_from("");
            }

            protected void insert(int c_bra, int c_ket, String s)
            {
          int adjustment = replace_s(c_bra, c_ket, s);
          if (c_bra <= bra) bra += adjustment;
          if (c_bra <= ket) ket += adjustment;
            }

            protected void insert(int c_bra, int c_ket, CharSequence s)
            {
          insert(c_bra, c_ket, s.toString());
            }

            /* Copy the slice into the supplied StringBuffer *\/
            protected StringBuffer slice_to(StringBuffer s)
            {
          slice_check();
          int len = ket - bra;
          s.replace(0, s.length(), current.substring(bra, ket));
          return s;
            }

            /* Copy the slice into the supplied StringBuilder *\/
            protected StringBuilder slice_to(StringBuilder s)
            {
          slice_check();
          int len = ket - bra;
          s.replace(0, s.length(), current.substring(bra, ket));
          return s;
            }

            protected StringBuffer assign_to(StringBuffer s)
            {
          s.replace(0, s.length(), current.substring(0, limit));
          return s;
            }

            protected StringBuilder assign_to(StringBuilder s)
            {
          s.replace(0, s.length(), current.substring(0, limit));
          return s;
            }

        /*
        extern void debug(struct SN_env * z, int number, int line_count)
        {   int i;
            int limit = SIZE(z->p);
            //if (number >= 0) printf("%3d (line %4d): '", number, line_count);
            if (number >= 0) printf("%3d (line %4d): [%d]'", number, line_count,limit);
            for (i = 0; i <= limit; i++)
            {   if (z->lb == i) printf("{");
                if (z->bra == i) printf("[");
                if (z->c == i) printf("|");
                if (z->ket == i) printf("]");
                if (z->l == i) printf("}");
                if (i < limit)
                {   int ch = z->p[i];
                    if (ch == 0) ch = '#';
                    printf("%c", ch);
                }
            }
            printf("'\\n");
        }
        *\/

        };


         /**
          * This class was automatically generated by a Snowball to Java compiler 
          * It implements the stemming algorithm defined by a snowball script.
          *\/

        public class danishStemmer extends org.tartarus.snowball.SnowballStemmer {

        private static final long serialVersionUID = 1L;

                private final static danishStemmer methodObject = new danishStemmer ();

                        private final static Among a_0[] = {
                            new Among ( "hed", -1, 1, "", methodObject ),
                            new Among ( "ethed", 0, 1, "", methodObject ),
                            new Among ( "ered", -1, 1, "", methodObject ),
                            new Among ( "e", -1, 1, "", methodObject ),
                            new Among ( "erede", 3, 1, "", methodObject ),
                            new Among ( "ende", 3, 1, "", methodObject ),
                            new Among ( "erende", 5, 1, "", methodObject ),
                            new Among ( "ene", 3, 1, "", methodObject ),
                            new Among ( "erne", 3, 1, "", methodObject ),
                            new Among ( "ere", 3, 1, "", methodObject ),
                            new Among ( "en", -1, 1, "", methodObject ),
                            new Among ( "heden", 10, 1, "", methodObject ),
                            new Among ( "eren", 10, 1, "", methodObject ),
                            new Among ( "er", -1, 1, "", methodObject ),
                            new Among ( "heder", 13, 1, "", methodObject ),
                            new Among ( "erer", 13, 1, "", methodObject ),
                            new Among ( "s", -1, 2, "", methodObject ),
                            new Among ( "heds", 16, 1, "", methodObject ),
                            new Among ( "es", 16, 1, "", methodObject ),
                            new Among ( "endes", 18, 1, "", methodObject ),
                            new Among ( "erendes", 19, 1, "", methodObject ),
                            new Among ( "enes", 18, 1, "", methodObject ),
                            new Among ( "ernes", 18, 1, "", methodObject ),
                            new Among ( "eres", 18, 1, "", methodObject ),
                            new Among ( "ens", 16, 1, "", methodObject ),
                            new Among ( "hedens", 24, 1, "", methodObject ),
                            new Among ( "erens", 24, 1, "", methodObject ),
                            new Among ( "ers", 16, 1, "", methodObject ),
                            new Among ( "ets", 16, 1, "", methodObject ),
                            new Among ( "erets", 28, 1, "", methodObject ),
                            new Among ( "et", -1, 1, "", methodObject ),
                            new Among ( "eret", 30, 1, "", methodObject )
                        };

                        private final static Among a_1[] = {
                            new Among ( "gd", -1, -1, "", methodObject ),
                            new Among ( "dt", -1, -1, "", methodObject ),
                            new Among ( "gt", -1, -1, "", methodObject ),
                            new Among ( "kt", -1, -1, "", methodObject )
                        };

                        private final static Among a_2[] = {
                            new Among ( "ig", -1, 1, "", methodObject ),
                            new Among ( "lig", 0, 1, "", methodObject ),
                            new Among ( "elig", 1, 1, "", methodObject ),
                            new Among ( "els", -1, 1, "", methodObject ),
                            new Among ( "l\u00F8st", -1, 2, "", methodObject )
                        };

                        private static final char g_v[] = {17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128 };

                        private static final char g_s_ending[] = {239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16 };

                private int I_x;
                private int I_p1;
                private java.lang.StringBuilder S_ch = new java.lang.StringBuilder();

                        private void copy_from(danishStemmer other) {
                            I_x = other.I_x;
                            I_p1 = other.I_p1;
                            S_ch = other.S_ch;
                            super.copy_from(other);
                        }

                        private boolean r_mark_regions() {
                    int v_1;
                    int v_2;
                            // (, line 29
                            I_p1 = limit;
                            // test, line 33
                            v_1 = cursor;
                            // (, line 33
                            // hop, line 33
                            {
                                int c = cursor + 3;
                                if (0 > c || c > limit)
                                {
                                    return false;
                                }
                                cursor = c;
                            }
                            // setmark x, line 33
                            I_x = cursor;
                            cursor = v_1;
                            // goto, line 34
                            golab0: while(true)
                            {
                                v_2 = cursor;
                                lab1: do {
                                    if (!(in_grouping(g_v, 97, 248)))
                                    {
                                        break lab1;
                                    }
                                    cursor = v_2;
                                    break golab0;
                                } while (false);
                                cursor = v_2;
                                if (cursor >= limit)
                                {
                                    return false;
                                }
                                cursor++;
                            }
                            // gopast, line 34
                            golab2: while(true)
                            {
                                lab3: do {
                                    if (!(out_grouping(g_v, 97, 248)))
                                    {
                                        break lab3;
                                    }
                                    break golab2;
                                } while (false);
                                if (cursor >= limit)
                                {
                                    return false;
                                }
                                cursor++;
                            }
                            // setmark p1, line 34
                            I_p1 = cursor;
                            // try, line 35
                            lab4: do {
                                // (, line 35
                                if (!(I_p1 < I_x))
                                {
                                    break lab4;
                                }
                                I_p1 = I_x;
                            } while (false);
                            return true;
                        }

                        private boolean r_main_suffix() {
                    int among_var;
                    int v_1;
                    int v_2;
                            // (, line 40
                            // setlimit, line 41
                            v_1 = limit - cursor;
                            // tomark, line 41
                            if (cursor < I_p1)
                            {
                                return false;
                            }
                            cursor = I_p1;
                            v_2 = limit_backward;
                            limit_backward = cursor;
                            cursor = limit - v_1;
                            // (, line 41
                            // [, line 41
                            ket = cursor;
                            // substring, line 41
                            among_var = find_among_b(a_0, 32);
                            if (among_var == 0)
                            {
                                limit_backward = v_2;
                                return false;
                            }
                            // ], line 41
                            bra = cursor;
                            limit_backward = v_2;
                            switch(among_var) {
                                case 0:
                                    return false;
                                case 1:
                                    // (, line 48
                                    // delete, line 48
                                    slice_del();
                                    break;
                                case 2:
                                    // (, line 50
                                    if (!(in_grouping_b(g_s_ending, 97, 229)))
                                    {
                                        return false;
                                    }
                                    // delete, line 50
                                    slice_del();
                                    break;
                            }
                            return true;
                        }

                        private boolean r_consonant_pair() {
                    int v_1;
                    int v_2;
                    int v_3;
                            // (, line 54
                            // test, line 55
                            v_1 = limit - cursor;
                            // (, line 55
                            // setlimit, line 56
                            v_2 = limit - cursor;
                            // tomark, line 56
                            if (cursor < I_p1)
                            {
                                return false;
                            }
                            cursor = I_p1;
                            v_3 = limit_backward;
                            limit_backward = cursor;
                            cursor = limit - v_2;
                            // (, line 56
                            // [, line 56
                            ket = cursor;
                            // substring, line 56
                            if (find_among_b(a_1, 4) == 0)
                            {
                                limit_backward = v_3;
                                return false;
                            }
                            // ], line 56
                            bra = cursor;
                            limit_backward = v_3;
                            cursor = limit - v_1;
                            // next, line 62
                            if (cursor <= limit_backward)
                            {
                                return false;
                            }
                            cursor--;
                            // ], line 62
                            bra = cursor;
                            // delete, line 62
                            slice_del();
                            return true;
                        }

                        private boolean r_other_suffix() {
                    int among_var;
                    int v_1;
                    int v_2;
                    int v_3;
                    int v_4;
                            // (, line 65
                            // do, line 66
                            v_1 = limit - cursor;
                            lab0: do {
                                // (, line 66
                                // [, line 66
                                ket = cursor;
                                // literal, line 66
                                if (!(eq_s_b(2, "st")))
                                {
                                    break lab0;
                                }
                                // ], line 66
                                bra = cursor;
                                // literal, line 66
                                if (!(eq_s_b(2, "ig")))
                                {
                                    break lab0;
                                }
                                // delete, line 66
                                slice_del();
                            } while (false);
                            cursor = limit - v_1;
                            // setlimit, line 67
                            v_2 = limit - cursor;
                            // tomark, line 67
                            if (cursor < I_p1)
                            {
                                return false;
                            }
                            cursor = I_p1;
                            v_3 = limit_backward;
                            limit_backward = cursor;
                            cursor = limit - v_2;
                            // (, line 67
                            // [, line 67
                            ket = cursor;
                            // substring, line 67
                            among_var = find_among_b(a_2, 5);
                            if (among_var == 0)
                            {
                                limit_backward = v_3;
                                return false;
                            }
                            // ], line 67
                            bra = cursor;
                            limit_backward = v_3;
                            switch(among_var) {
                                case 0:
                                    return false;
                                case 1:
                                    // (, line 70
                                    // delete, line 70
                                    slice_del();
                                    // do, line 70
                                    v_4 = limit - cursor;
                                    lab1: do {
                                        // call consonant_pair, line 70
                                        if (!r_consonant_pair())
                                        {
                                            break lab1;
                                        }
                                    } while (false);
                                    cursor = limit - v_4;
                                    break;
                                case 2:
                                    // (, line 72
                                    // <-, line 72
                                    slice_from("l\u00F8s");
                                    break;
                            }
                            return true;
                        }

                        private boolean r_undouble() {
                    int v_1;
                    int v_2;
                            // (, line 75
                            // setlimit, line 76
                            v_1 = limit - cursor;
                            // tomark, line 76
                            if (cursor < I_p1)
                            {
                                return false;
                            }
                            cursor = I_p1;
                            v_2 = limit_backward;
                            limit_backward = cursor;
                            cursor = limit - v_1;
                            // (, line 76
                            // [, line 76
                            ket = cursor;
                            if (!(out_grouping_b(g_v, 97, 248)))
                            {
                                limit_backward = v_2;
                                return false;
                            }
                            // ], line 76
                            bra = cursor;
                            // -> ch, line 76
                            S_ch = slice_to(S_ch);
                            limit_backward = v_2;
                            // name ch, line 77
                            if (!(eq_v_b(S_ch)))
                            {
                                return false;
                            }
                            // delete, line 78
                            slice_del();
                            return true;
                        }

                        public boolean stem() {
                    int v_1;
                    int v_2;
                    int v_3;
                    int v_4;
                    int v_5;
                            // (, line 82
                            // do, line 84
                            v_1 = cursor;
                            lab0: do {
                                // call mark_regions, line 84
                                if (!r_mark_regions())
                                {
                                    break lab0;
                                }
                            } while (false);
                            cursor = v_1;
                            // backwards, line 85
                            limit_backward = cursor; cursor = limit;
                            // (, line 85
                            // do, line 86
                            v_2 = limit - cursor;
                            lab1: do {
                                // call main_suffix, line 86
                                if (!r_main_suffix())
                                {
                                    break lab1;
                                }
                            } while (false);
                            cursor = limit - v_2;
                            // do, line 87
                            v_3 = limit - cursor;
                            lab2: do {
                                // call consonant_pair, line 87
                                if (!r_consonant_pair())
                                {
                                    break lab2;
                                }
                            } while (false);
                            cursor = limit - v_3;
                            // do, line 88
                            v_4 = limit - cursor;
                            lab3: do {
                                // call other_suffix, line 88
                                if (!r_other_suffix())
                                {
                                    break lab3;
                                }
                            } while (false);
                            cursor = limit - v_4;
                            // do, line 89
                            v_5 = limit - cursor;
                            lab4: do {
                                // call undouble, line 89
                                if (!r_undouble())
                                {
                                    break lab4;
                                }
                            } while (false);
                            cursor = limit - v_5;
                            cursor = limit_backward;                    return true;
                        }

                public boolean equals( Object o ) {
                    return o instanceof danishStemmer;
                }

                public int hashCode() {
                    return danishStemmer.class.getName().hashCode();
                }



        }
         */}).replace(/\*\\\//g, '*/');
      console.log('IGNORE ME: Danish parse started (may cause travis timeout)...');
      var test_ast = JavaParser.parse(src);
      console.log('IGNORE ME:Danish parse ended!');
      assert.deepEqual(
        test_ast
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [],
                name: {
                    node: "QualifiedName",
                    qualifier: {
                        node: "QualifiedName",
                        qualifier: {
                            node: "QualifiedName",
                            qualifier: {
                                node: "SimpleName",
                                identifier: "org"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "tartarus"
                            }
                        },
                        name: {
                            node: "SimpleName",
                            identifier: "snowball"
                        }
                    },
                    name: {
                        node: "SimpleName",
                        identifier: "ext"
                    }
                }
            },
            imports: [
                {
                    node: "ImportDeclaration",
                    static: false,
                    name: {
                        node: "QualifiedName",
                        qualifier: {
                            node: "QualifiedName",
                            qualifier: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "SimpleName",
                                    identifier: "org"
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "tartarus"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "snowball"
                            }
                        },
                        name: {
                            node: "SimpleName",
                            identifier: "Among"
                        }
                    },
                    onDemand: false
                }
            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "SnowballProgram"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "SnowballProgram"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "current"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "StringBuffer"
                                                    }
                                                },
                                                arguments: [],
                                                anonymousClassDeclaration: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "setCurrent"
                                            },
                                            arguments: [
                                                {
                                                    node: "StringLiteral",
                                                    escapedValue: "\"\""
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "setCurrent"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "value"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "current"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "replace"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "length"
                                                    },
                                                    arguments: []
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "value"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "MethodInvocation",
                                                expression: {
                                                    node: "SimpleName",
                                                    identifier: "current"
                                                },
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "length"
                                                },
                                                arguments: []
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "bra"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ket"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "String"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "getCurrent"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "result"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "toString"
                                                    },
                                                    arguments: []
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "current"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "StringBuffer"
                                                    }
                                                },
                                                arguments: [],
                                                anonymousClassDeclaration: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "result"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "StringBuffer"
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "current"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "cursor"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "limit"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "limit_backward"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "bra"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "ket"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "copy_from"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "SnowballProgram"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "other"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "current"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "current"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "limit_backward"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "bra"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "bra"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ket"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ket"
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "in_grouping"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "min"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "max"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: ">=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "max"
                                                },
                                            },
                                            operator: "||",
                                            rightOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: "<",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "min"
                                                },
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ch"
                                            },
                                            operator: "-=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "min"
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "ArrayAccess",
                                                        array: {
                                                            node: "SimpleName",
                                                            identifier: "s"
                                                        },
                                                        index: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "ch"
                                                            },
                                                            operator: ">>",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "3"
                                                            },
                                                        }
                                                    },
                                                    operator: "&",
                                                    rightOperand: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "0X1"
                                                            },
                                                            operator: "<<",
                                                            rightOperand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "ch"
                                                                    },
                                                                    operator: "&",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "0X7"
                                                                    },
                                                                }
                                                            },
                                                        }
                                                    },
                                                }
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "in_grouping_b"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "min"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "max"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: "-",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "1"
                                                            },
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "max"
                                                },
                                            },
                                            operator: "||",
                                            rightOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: "<",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "min"
                                                },
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ch"
                                            },
                                            operator: "-=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "min"
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "ArrayAccess",
                                                        array: {
                                                            node: "SimpleName",
                                                            identifier: "s"
                                                        },
                                                        index: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "ch"
                                                            },
                                                            operator: ">>",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "3"
                                                            },
                                                        }
                                                    },
                                                    operator: "&",
                                                    rightOperand: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "0X1"
                                                            },
                                                            operator: "<<",
                                                            rightOperand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "ch"
                                                                    },
                                                                    operator: "&",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "0X7"
                                                                    },
                                                                }
                                                            },
                                                        }
                                                    },
                                                }
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "--"
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "out_grouping"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "min"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "max"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: ">=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "max"
                                                },
                                            },
                                            operator: "||",
                                            rightOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: "<",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "min"
                                                },
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "PostfixExpression",
                                                        operand: {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        },
                                                        operator: "++"
                                                    }
                                                },
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: true
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ch"
                                            },
                                            operator: "-=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "min"
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "ArrayAccess",
                                                        array: {
                                                            node: "SimpleName",
                                                            identifier: "s"
                                                        },
                                                        index: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "ch"
                                                            },
                                                            operator: ">>",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "3"
                                                            },
                                                        }
                                                    },
                                                    operator: "&",
                                                    rightOperand: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "0X1"
                                                            },
                                                            operator: "<<",
                                                            rightOperand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "ch"
                                                                    },
                                                                    operator: "&",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "0X7"
                                                                    },
                                                                }
                                                            },
                                                        }
                                                    },
                                                }
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "PostfixExpression",
                                                        operand: {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        },
                                                        operator: "++"
                                                    }
                                                },
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: true
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: false
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "out_grouping_b"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "min"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "max"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: "-",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "1"
                                                            },
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "max"
                                                },
                                            },
                                            operator: "||",
                                            rightOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: "<",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "min"
                                                },
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "PostfixExpression",
                                                        operand: {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        },
                                                        operator: "--"
                                                    }
                                                },
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: true
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ch"
                                            },
                                            operator: "-=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "min"
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "ArrayAccess",
                                                        array: {
                                                            node: "SimpleName",
                                                            identifier: "s"
                                                        },
                                                        index: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "ch"
                                                            },
                                                            operator: ">>",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "3"
                                                            },
                                                        }
                                                    },
                                                    operator: "&",
                                                    rightOperand: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "0X1"
                                                            },
                                                            operator: "<<",
                                                            rightOperand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "ch"
                                                                    },
                                                                    operator: "&",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "0X7"
                                                                    },
                                                                }
                                                            },
                                                        }
                                                    },
                                                }
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "PostfixExpression",
                                                        operand: {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        },
                                                        operator: "--"
                                                    }
                                                },
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: true
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: false
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "in_range"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "min"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "max"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: ">=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "max"
                                                },
                                            },
                                            operator: "||",
                                            rightOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: "<",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "min"
                                                },
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "in_range_b"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "min"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "max"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: "-",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "1"
                                                            },
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "max"
                                                },
                                            },
                                            operator: "||",
                                            rightOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                operator: "<",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "min"
                                                },
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "--"
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "out_range"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "min"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "max"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: ">=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "PrefixExpression",
                                            operator: "!",
                                            operand: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "ch"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "max"
                                                        },
                                                    },
                                                    operator: "||",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "ch"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "min"
                                                        },
                                                    },
                                                }
                                            }
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "out_range_b"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "min"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "max"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "char"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "ch"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "charAt"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: "-",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "1"
                                                            },
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "PrefixExpression",
                                            operator: "!",
                                            operand: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "ch"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "max"
                                                        },
                                                    },
                                                    operator: "||",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "ch"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "min"
                                                        },
                                                    },
                                                }
                                            }
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "--"
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "eq_s"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s_size"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "s_size"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [
                                            {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "=",
                                                rightHandSide: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ],
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "!=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "s_size"
                                            },
                                        },
                                        updaters: [
                                            {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "++"
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "SimpleName",
                                                                identifier: "current"
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "charAt"
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "cursor"
                                                                    },
                                                                    operator: "+",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                }
                                                            ]
                                                        },
                                                        operator: "!=",
                                                        rightOperand: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "SimpleName",
                                                                identifier: "s"
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "charAt"
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                }
                                                            ]
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "ReturnStatement",
                                                        expression: {
                                                            node: "BooleanLiteral",
                                                            booleanValue: false
                                                        }
                                                    },
                                                    elseStatement: null
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "s_size"
                                            }
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "eq_s_b"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s_size"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit_backward"
                                                },
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "s_size"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ReturnStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [
                                            {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "=",
                                                rightHandSide: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ],
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "!=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "s_size"
                                            },
                                        },
                                        updaters: [
                                            {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "++"
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "SimpleName",
                                                                identifier: "current"
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "charAt"
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "cursor"
                                                                        },
                                                                        operator: "-",
                                                                        rightOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "s_size"
                                                                        },
                                                                    },
                                                                    operator: "+",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                }
                                                            ]
                                                        },
                                                        operator: "!=",
                                                        rightOperand: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "SimpleName",
                                                                identifier: "s"
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "charAt"
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                }
                                                            ]
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "ReturnStatement",
                                                        expression: {
                                                            node: "BooleanLiteral",
                                                            booleanValue: false
                                                        }
                                                    },
                                                    elseStatement: null
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "-=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "s_size"
                                            }
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "eq_v"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "CharSequence"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "eq_s"
                                            },
                                            arguments: [
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "length"
                                                    },
                                                    arguments: []
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "toString"
                                                    },
                                                    arguments: []
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "eq_v_b"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "CharSequence"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "eq_s_b"
                                            },
                                            arguments: [
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "length"
                                                    },
                                                    arguments: []
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "toString"
                                                    },
                                                    arguments: []
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "find_among"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "Among"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "v"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "v_size"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "j"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "SimpleName",
                                                    identifier: "v_size"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "c"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "l"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "common_i"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "common_j"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "first_key_inspected"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: false
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "WhileStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "k"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                },
                                                                operator: "+",
                                                                rightOperand: {
                                                                    node: "ParenthesizedExpression",
                                                                    expression: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "ParenthesizedExpression",
                                                                            expression: {
                                                                                node: "InfixExpression",
                                                                                leftOperand: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "j"
                                                                                },
                                                                                operator: "-",
                                                                                rightOperand: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "i"
                                                                                },
                                                                            }
                                                                        },
                                                                        operator: ">>",
                                                                        rightOperand: {
                                                                            node: "NumberLiteral",
                                                                            token: "1"
                                                                        },
                                                                    }
                                                                },
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "diff"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "NumberLiteral",
                                                                token: "0"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "common"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "ConditionalExpression",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "common_i"
                                                                    },
                                                                    operator: "<",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "common_j"
                                                                    },
                                                                },
                                                                thenExpression: {
                                                                    node: "SimpleName",
                                                                    identifier: "common_i"
                                                                },
                                                                elseExpression: {
                                                                    node: "SimpleName",
                                                                    identifier: "common_j"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Among"
                                                        }
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "ArrayAccess",
                                                                array: {
                                                                    node: "SimpleName",
                                                                    identifier: "v"
                                                                },
                                                                index: {
                                                                    node: "SimpleName",
                                                                    identifier: "k"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "i2"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: null
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "ForStatement",
                                                    initializers: [
                                                        {
                                                            node: "Assignment",
                                                            leftHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "i2"
                                                            },
                                                            operator: "=",
                                                            rightHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "common"
                                                            }
                                                        }
                                                    ],
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i2"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "s_size"
                                                            }
                                                        },
                                                    },
                                                    updaters: [
                                                        {
                                                            node: "PostfixExpression",
                                                            operand: {
                                                                node: "SimpleName",
                                                                identifier: "i2"
                                                            },
                                                            operator: "++"
                                                        }
                                                    ],
                                                    body: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "c"
                                                                        },
                                                                        operator: "+",
                                                                        rightOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "common"
                                                                        },
                                                                    },
                                                                    operator: "==",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "l"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "Block",
                                                                    statements: [
                                                                        {
                                                                            node: "ExpressionStatement",
                                                                            expression: {
                                                                                node: "Assignment",
                                                                                leftHandSide: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "diff"
                                                                                },
                                                                                operator: "=",
                                                                                rightHandSide: {
                                                                                    node: "PrefixExpression",
                                                                                    operator: "-",
                                                                                    operand: {
                                                                                        node: "NumberLiteral",
                                                                                        token: "1"
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        {
                                                                            node: "BreakStatement",
                                                                            label: null
                                                                        }
                                                                    ]
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "diff"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "MethodInvocation",
                                                                            expression: {
                                                                                node: "SimpleName",
                                                                                identifier: "current"
                                                                            },
                                                                            typeArguments: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "charAt"
                                                                            },
                                                                            arguments: [
                                                                                {
                                                                                    node: "InfixExpression",
                                                                                    leftOperand: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "c"
                                                                                    },
                                                                                    operator: "+",
                                                                                    rightOperand: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "common"
                                                                                    },
                                                                                }
                                                                            ]
                                                                        },
                                                                        operator: "-",
                                                                        rightOperand: {
                                                                            node: "ArrayAccess",
                                                                            array: {
                                                                                node: "QualifiedName",
                                                                                qualifier: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "w"
                                                                                },
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "s"
                                                                                }
                                                                            },
                                                                            index: {
                                                                                node: "SimpleName",
                                                                                identifier: "i2"
                                                                            }
                                                                        },
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "diff"
                                                                    },
                                                                    operator: "!=",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "0"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "BreakStatement",
                                                                    label: null
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "PostfixExpression",
                                                                    operand: {
                                                                        node: "SimpleName",
                                                                        identifier: "common"
                                                                    },
                                                                    operator: "++"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "diff"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "j"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "k"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "common_j"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "common"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    elseStatement: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "k"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "common_i"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "common"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "j"
                                                            },
                                                            operator: "-",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                        },
                                                        operator: "<=",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                    operator: ">",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "0"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "BreakStatement",
                                                                    label: null
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "j"
                                                                    },
                                                                    operator: "==",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "BreakStatement",
                                                                    label: null
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "SimpleName",
                                                                    identifier: "first_key_inspected"
                                                                },
                                                                thenStatement: {
                                                                    node: "BreakStatement",
                                                                    label: null
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "first_key_inspected"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "BooleanLiteral",
                                                                        booleanValue: true
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    elseStatement: null
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "WhileStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Among"
                                                        }
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "ArrayAccess",
                                                                array: {
                                                                    node: "SimpleName",
                                                                    identifier: "v"
                                                                },
                                                                index: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "common_i"
                                                        },
                                                        operator: ">=",
                                                        rightOperand: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "s_size"
                                                            }
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "cursor"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "c"
                                                                        },
                                                                        operator: "+",
                                                                        rightOperand: {
                                                                            node: "QualifiedName",
                                                                            qualifier: {
                                                                                node: "SimpleName",
                                                                                identifier: "w"
                                                                            },
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "s_size"
                                                                            }
                                                                        },
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "w"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "method"
                                                                        }
                                                                    },
                                                                    operator: "==",
                                                                    rightOperand: {
                                                                        node: "NullLiteral"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "ReturnStatement",
                                                                    expression: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "w"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "result"
                                                                        }
                                                                    }
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "VariableDeclarationStatement",
                                                                modifiers: [],
                                                                type: {
                                                                    node: "PrimitiveType",
                                                                    primitiveTypeCode: "boolean"
                                                                },
                                                                fragments: [
                                                                    {
                                                                        node: "VariableDeclarationFragment",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "res"
                                                                        },
                                                                        extraDimensions: 0,
                                                                        initializer: null
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                node: "TryStatement",
                                                                resources: [],
                                                                body: {
                                                                    node: "Block",
                                                                    statements: [
                                                                        {
                                                                            node: "VariableDeclarationStatement",
                                                                            modifiers: [],
                                                                            type: {
                                                                                node: "SimpleType",
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "Object"
                                                                                }
                                                                            },
                                                                            fragments: [
                                                                                {
                                                                                    node: "VariableDeclarationFragment",
                                                                                    name: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "resobj"
                                                                                    },
                                                                                    extraDimensions: 0,
                                                                                    initializer: {
                                                                                        node: "MethodInvocation",
                                                                                        expression: {
                                                                                            node: "QualifiedName",
                                                                                            qualifier: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "w"
                                                                                            },
                                                                                            name: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "method"
                                                                                            }
                                                                                        },
                                                                                        typeArguments: [],
                                                                                        name: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "invoke"
                                                                                        },
                                                                                        arguments: [
                                                                                            {
                                                                                                node: "QualifiedName",
                                                                                                qualifier: {
                                                                                                    node: "SimpleName",
                                                                                                    identifier: "w"
                                                                                                },
                                                                                                name: {
                                                                                                    node: "SimpleName",
                                                                                                    identifier: "methodobject"
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                node: "ArrayCreation",
                                                                                                type: {
                                                                                                    node: "ArrayType",
                                                                                                    componentType: {
                                                                                                        node: "SimpleType",
                                                                                                        name: {
                                                                                                            node: "SimpleName",
                                                                                                            identifier: "Object"
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                dimensions: [
                                                                                                    {
                                                                                                        node: "NumberLiteral",
                                                                                                        token: "0"
                                                                                                    }
                                                                                                ],
                                                                                                initializer: null
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            node: "ExpressionStatement",
                                                                            expression: {
                                                                                node: "Assignment",
                                                                                leftHandSide: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "res"
                                                                                },
                                                                                operator: "=",
                                                                                rightHandSide: {
                                                                                    node: "MethodInvocation",
                                                                                    expression: {
                                                                                        node: "MethodInvocation",
                                                                                        expression: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "resobj"
                                                                                        },
                                                                                        typeArguments: [],
                                                                                        name: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "toString"
                                                                                        },
                                                                                        arguments: []
                                                                                    },
                                                                                    typeArguments: [],
                                                                                    name: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "equals"
                                                                                    },
                                                                                    arguments: [
                                                                                        {
                                                                                            node: "StringLiteral",
                                                                                            escapedValue: "\"true\""
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                catchClauses: [
                                                                    {
                                                                        node: "CatchClause",
                                                                        exception: {
                                                                            node: "SingleVariableDeclaration",
                                                                            modifiers: [],
                                                                            type: {
                                                                                node: "SimpleType",
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "InvocationTargetException"
                                                                                }
                                                                            },
                                                                            varargs: false,
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "e"
                                                                            },
                                                                            extraDimensions: 0,
                                                                            initializer: null
                                                                        },
                                                                        body: {
                                                                            node: "Block",
                                                                            statements: [
                                                                                {
                                                                                    node: "ExpressionStatement",
                                                                                    expression: {
                                                                                        node: "Assignment",
                                                                                        leftHandSide: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "res"
                                                                                        },
                                                                                        operator: "=",
                                                                                        rightHandSide: {
                                                                                            node: "BooleanLiteral",
                                                                                            booleanValue: false
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        node: "CatchClause",
                                                                        exception: {
                                                                            node: "SingleVariableDeclaration",
                                                                            modifiers: [],
                                                                            type: {
                                                                                node: "SimpleType",
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "IllegalAccessException"
                                                                                }
                                                                            },
                                                                            varargs: false,
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "e"
                                                                            },
                                                                            extraDimensions: 0,
                                                                            initializer: null
                                                                        },
                                                                        body: {
                                                                            node: "Block",
                                                                            statements: [
                                                                                {
                                                                                    node: "ExpressionStatement",
                                                                                    expression: {
                                                                                        node: "Assignment",
                                                                                        leftHandSide: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "res"
                                                                                        },
                                                                                        operator: "=",
                                                                                        rightHandSide: {
                                                                                            node: "BooleanLiteral",
                                                                                            booleanValue: false
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ],
                                                                finally: null
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "cursor"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "c"
                                                                        },
                                                                        operator: "+",
                                                                        rightOperand: {
                                                                            node: "QualifiedName",
                                                                            qualifier: {
                                                                                node: "SimpleName",
                                                                                identifier: "w"
                                                                            },
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "s_size"
                                                                            }
                                                                        },
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "SimpleName",
                                                                    identifier: "res"
                                                                },
                                                                thenStatement: {
                                                                    node: "ReturnStatement",
                                                                    expression: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "w"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "result"
                                                                        }
                                                                    }
                                                                },
                                                                elseStatement: null
                                                            }
                                                        ]
                                                    },
                                                    elseStatement: null
                                                },
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "Assignment",
                                                        leftHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "=",
                                                        rightHandSide: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "substring_i"
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "ReturnStatement",
                                                        expression: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        }
                                                    },
                                                    elseStatement: null
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "find_among_b"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "Among"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "v"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "v_size"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "j"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "SimpleName",
                                                    identifier: "v_size"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "c"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "lb"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "SimpleName",
                                                    identifier: "limit_backward"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "common_i"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "common_j"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "first_key_inspected"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: false
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "WhileStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "k"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                },
                                                                operator: "+",
                                                                rightOperand: {
                                                                    node: "ParenthesizedExpression",
                                                                    expression: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "ParenthesizedExpression",
                                                                            expression: {
                                                                                node: "InfixExpression",
                                                                                leftOperand: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "j"
                                                                                },
                                                                                operator: "-",
                                                                                rightOperand: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "i"
                                                                                },
                                                                            }
                                                                        },
                                                                        operator: ">>",
                                                                        rightOperand: {
                                                                            node: "NumberLiteral",
                                                                            token: "1"
                                                                        },
                                                                    }
                                                                },
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "diff"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "NumberLiteral",
                                                                token: "0"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "common"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "ConditionalExpression",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "common_i"
                                                                    },
                                                                    operator: "<",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "common_j"
                                                                    },
                                                                },
                                                                thenExpression: {
                                                                    node: "SimpleName",
                                                                    identifier: "common_i"
                                                                },
                                                                elseExpression: {
                                                                    node: "SimpleName",
                                                                    identifier: "common_j"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Among"
                                                        }
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "ArrayAccess",
                                                                array: {
                                                                    node: "SimpleName",
                                                                    identifier: "v"
                                                                },
                                                                index: {
                                                                    node: "SimpleName",
                                                                    identifier: "k"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "i2"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: null
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "ForStatement",
                                                    initializers: [
                                                        {
                                                            node: "Assignment",
                                                            leftHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "i2"
                                                            },
                                                            operator: "=",
                                                            rightHandSide: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "w"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "s_size"
                                                                        }
                                                                    },
                                                                    operator: "-",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "1"
                                                                    },
                                                                },
                                                                operator: "-",
                                                                rightOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "common"
                                                                },
                                                            }
                                                        }
                                                    ],
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i2"
                                                        },
                                                        operator: ">=",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                    },
                                                    updaters: [
                                                        {
                                                            node: "PostfixExpression",
                                                            operand: {
                                                                node: "SimpleName",
                                                                identifier: "i2"
                                                            },
                                                            operator: "--"
                                                        }
                                                    ],
                                                    body: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "c"
                                                                        },
                                                                        operator: "-",
                                                                        rightOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "common"
                                                                        },
                                                                    },
                                                                    operator: "==",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "lb"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "Block",
                                                                    statements: [
                                                                        {
                                                                            node: "ExpressionStatement",
                                                                            expression: {
                                                                                node: "Assignment",
                                                                                leftHandSide: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "diff"
                                                                                },
                                                                                operator: "=",
                                                                                rightHandSide: {
                                                                                    node: "PrefixExpression",
                                                                                    operator: "-",
                                                                                    operand: {
                                                                                        node: "NumberLiteral",
                                                                                        token: "1"
                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                        {
                                                                            node: "BreakStatement",
                                                                            label: null
                                                                        }
                                                                    ]
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "diff"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "MethodInvocation",
                                                                            expression: {
                                                                                node: "SimpleName",
                                                                                identifier: "current"
                                                                            },
                                                                            typeArguments: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "charAt"
                                                                            },
                                                                            arguments: [
                                                                                {
                                                                                    node: "InfixExpression",
                                                                                    leftOperand: {
                                                                                        node: "InfixExpression",
                                                                                        leftOperand: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "c"
                                                                                        },
                                                                                        operator: "-",
                                                                                        rightOperand: {
                                                                                            node: "NumberLiteral",
                                                                                            token: "1"
                                                                                        },
                                                                                    },
                                                                                    operator: "-",
                                                                                    rightOperand: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "common"
                                                                                    },
                                                                                }
                                                                            ]
                                                                        },
                                                                        operator: "-",
                                                                        rightOperand: {
                                                                            node: "ArrayAccess",
                                                                            array: {
                                                                                node: "QualifiedName",
                                                                                qualifier: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "w"
                                                                                },
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "s"
                                                                                }
                                                                            },
                                                                            index: {
                                                                                node: "SimpleName",
                                                                                identifier: "i2"
                                                                            }
                                                                        },
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "diff"
                                                                    },
                                                                    operator: "!=",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "0"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "BreakStatement",
                                                                    label: null
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "PostfixExpression",
                                                                    operand: {
                                                                        node: "SimpleName",
                                                                        identifier: "common"
                                                                    },
                                                                    operator: "++"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "diff"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "j"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "k"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "common_j"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "common"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    elseStatement: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "k"
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "common_i"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "common"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "j"
                                                            },
                                                            operator: "-",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                        },
                                                        operator: "<=",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                    operator: ">",
                                                                    rightOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "0"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "BreakStatement",
                                                                    label: null
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "j"
                                                                    },
                                                                    operator: "==",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "BreakStatement",
                                                                    label: null
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "SimpleName",
                                                                    identifier: "first_key_inspected"
                                                                },
                                                                thenStatement: {
                                                                    node: "BreakStatement",
                                                                    label: null
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "first_key_inspected"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "BooleanLiteral",
                                                                        booleanValue: true
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    elseStatement: null
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "WhileStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Among"
                                                        }
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "ArrayAccess",
                                                                array: {
                                                                    node: "SimpleName",
                                                                    identifier: "v"
                                                                },
                                                                index: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "common_i"
                                                        },
                                                        operator: ">=",
                                                        rightOperand: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "s_size"
                                                            }
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "cursor"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "c"
                                                                        },
                                                                        operator: "-",
                                                                        rightOperand: {
                                                                            node: "QualifiedName",
                                                                            qualifier: {
                                                                                node: "SimpleName",
                                                                                identifier: "w"
                                                                            },
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "s_size"
                                                                            }
                                                                        },
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "w"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "method"
                                                                        }
                                                                    },
                                                                    operator: "==",
                                                                    rightOperand: {
                                                                        node: "NullLiteral"
                                                                    },
                                                                },
                                                                thenStatement: {
                                                                    node: "ReturnStatement",
                                                                    expression: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "w"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "result"
                                                                        }
                                                                    }
                                                                },
                                                                elseStatement: null
                                                            },
                                                            {
                                                                node: "VariableDeclarationStatement",
                                                                modifiers: [],
                                                                type: {
                                                                    node: "PrimitiveType",
                                                                    primitiveTypeCode: "boolean"
                                                                },
                                                                fragments: [
                                                                    {
                                                                        node: "VariableDeclarationFragment",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "res"
                                                                        },
                                                                        extraDimensions: 0,
                                                                        initializer: null
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                node: "TryStatement",
                                                                resources: [],
                                                                body: {
                                                                    node: "Block",
                                                                    statements: [
                                                                        {
                                                                            node: "VariableDeclarationStatement",
                                                                            modifiers: [],
                                                                            type: {
                                                                                node: "SimpleType",
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "Object"
                                                                                }
                                                                            },
                                                                            fragments: [
                                                                                {
                                                                                    node: "VariableDeclarationFragment",
                                                                                    name: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "resobj"
                                                                                    },
                                                                                    extraDimensions: 0,
                                                                                    initializer: {
                                                                                        node: "MethodInvocation",
                                                                                        expression: {
                                                                                            node: "QualifiedName",
                                                                                            qualifier: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "w"
                                                                                            },
                                                                                            name: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "method"
                                                                                            }
                                                                                        },
                                                                                        typeArguments: [],
                                                                                        name: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "invoke"
                                                                                        },
                                                                                        arguments: [
                                                                                            {
                                                                                                node: "QualifiedName",
                                                                                                qualifier: {
                                                                                                    node: "SimpleName",
                                                                                                    identifier: "w"
                                                                                                },
                                                                                                name: {
                                                                                                    node: "SimpleName",
                                                                                                    identifier: "methodobject"
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                node: "ArrayCreation",
                                                                                                type: {
                                                                                                    node: "ArrayType",
                                                                                                    componentType: {
                                                                                                        node: "SimpleType",
                                                                                                        name: {
                                                                                                            node: "SimpleName",
                                                                                                            identifier: "Object"
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                dimensions: [
                                                                                                    {
                                                                                                        node: "NumberLiteral",
                                                                                                        token: "0"
                                                                                                    }
                                                                                                ],
                                                                                                initializer: null
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            node: "ExpressionStatement",
                                                                            expression: {
                                                                                node: "Assignment",
                                                                                leftHandSide: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "res"
                                                                                },
                                                                                operator: "=",
                                                                                rightHandSide: {
                                                                                    node: "MethodInvocation",
                                                                                    expression: {
                                                                                        node: "MethodInvocation",
                                                                                        expression: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "resobj"
                                                                                        },
                                                                                        typeArguments: [],
                                                                                        name: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "toString"
                                                                                        },
                                                                                        arguments: []
                                                                                    },
                                                                                    typeArguments: [],
                                                                                    name: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "equals"
                                                                                    },
                                                                                    arguments: [
                                                                                        {
                                                                                            node: "StringLiteral",
                                                                                            escapedValue: "\"true\""
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                catchClauses: [
                                                                    {
                                                                        node: "CatchClause",
                                                                        exception: {
                                                                            node: "SingleVariableDeclaration",
                                                                            modifiers: [],
                                                                            type: {
                                                                                node: "SimpleType",
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "InvocationTargetException"
                                                                                }
                                                                            },
                                                                            varargs: false,
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "e"
                                                                            },
                                                                            extraDimensions: 0,
                                                                            initializer: null
                                                                        },
                                                                        body: {
                                                                            node: "Block",
                                                                            statements: [
                                                                                {
                                                                                    node: "ExpressionStatement",
                                                                                    expression: {
                                                                                        node: "Assignment",
                                                                                        leftHandSide: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "res"
                                                                                        },
                                                                                        operator: "=",
                                                                                        rightHandSide: {
                                                                                            node: "BooleanLiteral",
                                                                                            booleanValue: false
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        node: "CatchClause",
                                                                        exception: {
                                                                            node: "SingleVariableDeclaration",
                                                                            modifiers: [],
                                                                            type: {
                                                                                node: "SimpleType",
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "IllegalAccessException"
                                                                                }
                                                                            },
                                                                            varargs: false,
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "e"
                                                                            },
                                                                            extraDimensions: 0,
                                                                            initializer: null
                                                                        },
                                                                        body: {
                                                                            node: "Block",
                                                                            statements: [
                                                                                {
                                                                                    node: "ExpressionStatement",
                                                                                    expression: {
                                                                                        node: "Assignment",
                                                                                        leftHandSide: {
                                                                                            node: "SimpleName",
                                                                                            identifier: "res"
                                                                                        },
                                                                                        operator: "=",
                                                                                        rightHandSide: {
                                                                                            node: "BooleanLiteral",
                                                                                            booleanValue: false
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ],
                                                                finally: null
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "Assignment",
                                                                    leftHandSide: {
                                                                        node: "SimpleName",
                                                                        identifier: "cursor"
                                                                    },
                                                                    operator: "=",
                                                                    rightHandSide: {
                                                                        node: "InfixExpression",
                                                                        leftOperand: {
                                                                            node: "SimpleName",
                                                                            identifier: "c"
                                                                        },
                                                                        operator: "-",
                                                                        rightOperand: {
                                                                            node: "QualifiedName",
                                                                            qualifier: {
                                                                                node: "SimpleName",
                                                                                identifier: "w"
                                                                            },
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "s_size"
                                                                            }
                                                                        },
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "SimpleName",
                                                                    identifier: "res"
                                                                },
                                                                thenStatement: {
                                                                    node: "ReturnStatement",
                                                                    expression: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "w"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "result"
                                                                        }
                                                                    }
                                                                },
                                                                elseStatement: null
                                                            }
                                                        ]
                                                    },
                                                    elseStatement: null
                                                },
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "Assignment",
                                                        leftHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "=",
                                                        rightHandSide: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "w"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "substring_i"
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    node: "IfStatement",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                    },
                                                    thenStatement: {
                                                        node: "ReturnStatement",
                                                        expression: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        }
                                                    },
                                                    elseStatement: null
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "replace_s"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c_bra"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c_ket"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "adjustment"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "s"
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "length"
                                                        },
                                                        arguments: []
                                                    },
                                                    operator: "-",
                                                    rightOperand: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "c_ket"
                                                            },
                                                            operator: "-",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "c_bra"
                                                            },
                                                        }
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "current"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "replace"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "c_bra"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "c_ket"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "s"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "adjustment"
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: ">=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "c_ket"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                                operator: "+=",
                                                rightHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "adjustment"
                                                }
                                            }
                                        },
                                        elseStatement: {
                                            node: "IfStatement",
                                            expression: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "c_bra"
                                                },
                                            },
                                            thenStatement: {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "Assignment",
                                                    leftHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "cursor"
                                                    },
                                                    operator: "=",
                                                    rightHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "c_bra"
                                                    }
                                                }
                                            },
                                            elseStatement: null
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "adjustment"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "slice_check"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "bra"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                    },
                                                    operator: "||",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "bra"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "ket"
                                                        },
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "ket"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "limit"
                                                    },
                                                },
                                            },
                                            operator: "||",
                                            rightOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "length"
                                                    },
                                                    arguments: []
                                                },
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "err"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"faulty slice operation\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "slice_from"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "slice_check"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "replace_s"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "bra"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "ket"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "s"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "slice_from"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "CharSequence"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "slice_from"
                                            },
                                            arguments: [
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "toString"
                                                    },
                                                    arguments: []
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "slice_del"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "slice_from"
                                            },
                                            arguments: [
                                                {
                                                    node: "StringLiteral",
                                                    escapedValue: "\"\""
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "insert"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c_bra"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c_ket"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "adjustment"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "replace_s"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "c_bra"
                                                        },
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "c_ket"
                                                        },
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "s"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "c_bra"
                                            },
                                            operator: "<=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "bra"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "bra"
                                                },
                                                operator: "+=",
                                                rightHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "adjustment"
                                                }
                                            }
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "c_bra"
                                            },
                                            operator: "<=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "ket"
                                            },
                                        },
                                        thenStatement: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "ket"
                                                },
                                                operator: "+=",
                                                rightHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "adjustment"
                                                }
                                            }
                                        },
                                        elseStatement: null
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "insert"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c_bra"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c_ket"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "CharSequence"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "insert"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "c_bra"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "c_ket"
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "toString"
                                                    },
                                                    arguments: []
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "StringBuffer"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "slice_to"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "StringBuffer"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "slice_check"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "len"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "ket"
                                                    },
                                                    operator: "-",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "bra"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "s"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "replace"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "length"
                                                    },
                                                    arguments: []
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "substring"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "bra"
                                                        },
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "ket"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "s"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "StringBuilder"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "slice_to"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "StringBuilder"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "slice_check"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "len"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "ket"
                                                    },
                                                    operator: "-",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "bra"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "s"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "replace"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "length"
                                                    },
                                                    arguments: []
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "substring"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "bra"
                                                        },
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "ket"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "s"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "StringBuffer"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "assign_to"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "StringBuffer"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "s"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "replace"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "length"
                                                    },
                                                    arguments: []
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "substring"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "limit"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "s"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "StringBuilder"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "assign_to"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "StringBuilder"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "s"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "s"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "replace"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "s"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "length"
                                                    },
                                                    arguments: []
                                                },
                                                {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "current"
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "substring"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "limit"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "s"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "danishStemmer"
                    },
                    typeParameters: [],
                    superclassType: {
                        node: "SimpleType",
                        name: {
                            node: "QualifiedName",
                            qualifier: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "QualifiedName",
                                    qualifier: {
                                        node: "SimpleName",
                                        identifier: "org"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "tartarus"
                                    }
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "snowball"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "SnowballStemmer"
                            }
                        }
                    },
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "long"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "serialVersionUID"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "1L"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "danishStemmer"
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "methodObject"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [],
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "danishStemmer"
                                            }
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: null
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "Among"
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a_0"
                                    },
                                    extraDimensions: 1,
                                    initializer: {
                                        node: "ArrayInitializer",
                                        expressions: [
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"hed\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ethed\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "0"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ered\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"e\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"erede\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ende\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"erende\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ene\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"erne\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ere\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"en\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"heden\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "10"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"eren\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "10"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"er\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"heder\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"erer\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"s\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "2"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"heds\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "16"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"es\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "16"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"endes\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "18"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"erendes\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "19"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"enes\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "18"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ernes\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "18"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"eres\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "18"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ens\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "16"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"hedens\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "24"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"erens\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "24"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ers\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "16"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ets\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "16"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"erets\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "28"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"et\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"eret\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "30"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "Among"
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a_1"
                                    },
                                    extraDimensions: 1,
                                    initializer: {
                                        node: "ArrayInitializer",
                                        expressions: [
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"gd\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"dt\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"gt\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"kt\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "Among"
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a_2"
                                    },
                                    extraDimensions: 1,
                                    initializer: {
                                        node: "ArrayInitializer",
                                        expressions: [
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"ig\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"lig\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "0"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"elig\""
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"els\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            {
                                                node: "ClassInstanceCreation",
                                                expression: null,
                                                typeArguments: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Among"
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"l\\u00F8st\""
                                                    },
                                                    {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "2"
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"\""
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "methodObject"
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "char"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g_v"
                                    },
                                    extraDimensions: 1,
                                    initializer: {
                                        node: "ArrayInitializer",
                                        expressions: [
                                            {
                                                node: "NumberLiteral",
                                                token: "17"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "65"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "16"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "1"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "48"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "128"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "final"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "char"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g_s_ending"
                                    },
                                    extraDimensions: 1,
                                    initializer: {
                                        node: "ArrayInitializer",
                                        expressions: [
                                            {
                                                node: "NumberLiteral",
                                                token: "239"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "254"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "42"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "3"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                            {
                                                node: "NumberLiteral",
                                                token: "16"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "I_x"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "I_p1"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "QualifiedName",
                                    qualifier: {
                                        node: "QualifiedName",
                                        qualifier: {
                                            node: "SimpleName",
                                            identifier: "java"
                                        },
                                        name: {
                                            node: "SimpleName",
                                            identifier: "lang"
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "StringBuilder"
                                    }
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "S_ch"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "ClassInstanceCreation",
                                        expression: null,
                                        typeArguments: [],
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "java"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "lang"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "StringBuilder"
                                                }
                                            }
                                        },
                                        arguments: [],
                                        anonymousClassDeclaration: null
                                    }
                                }
                            ]
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "copy_from"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "danishStemmer"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "other"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_x"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "I_x"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "I_p1"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "S_ch"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "S_ch"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "SuperMethodInvocation",
                                            qualifier: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "copy_from"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "other"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "r_mark_regions"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "Block",
                                        statements: [
                                            {
                                                node: "VariableDeclarationStatement",
                                                modifiers: [],
                                                type: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "c"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: "+",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "3"
                                                            },
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "IfStatement",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "c"
                                                        },
                                                    },
                                                    operator: "||",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "c"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "limit"
                                                        },
                                                    },
                                                },
                                                thenStatement: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ReturnStatement",
                                                            expression: {
                                                                node: "BooleanLiteral",
                                                                booleanValue: false
                                                            }
                                                        }
                                                    ]
                                                },
                                                elseStatement: null
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "Assignment",
                                                    leftHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "cursor"
                                                    },
                                                    operator: "=",
                                                    rightHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_x"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_1"
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "golab0"
                                        },
                                        body: {
                                            node: "WhileStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: true
                                            },
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "Assignment",
                                                            leftHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "v_2"
                                                            },
                                                            operator: "=",
                                                            rightHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        node: "LabeledStatement",
                                                        label: {
                                                            node: "SimpleName",
                                                            identifier: "lab1"
                                                        },
                                                        body: {
                                                            node: "DoStatement",
                                                            body: {
                                                                node: "Block",
                                                                statements: [
                                                                    {
                                                                        node: "IfStatement",
                                                                        expression: {
                                                                            node: "PrefixExpression",
                                                                            operator: "!",
                                                                            operand: {
                                                                                node: "ParenthesizedExpression",
                                                                                expression: {
                                                                                    node: "MethodInvocation",
                                                                                    expression: null,
                                                                                    typeArguments: [],
                                                                                    name: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "in_grouping"
                                                                                    },
                                                                                    arguments: [
                                                                                        {
                                                                                            node: "SimpleName",
                                                                                            identifier: "g_v"
                                                                                        },
                                                                                        {
                                                                                            node: "NumberLiteral",
                                                                                            token: "97"
                                                                                        },
                                                                                        {
                                                                                            node: "NumberLiteral",
                                                                                            token: "248"
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        },
                                                                        thenStatement: {
                                                                            node: "Block",
                                                                            statements: [
                                                                                {
                                                                                    node: "BreakStatement",
                                                                                    label: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "lab1"
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        elseStatement: null
                                                                    },
                                                                    {
                                                                        node: "ExpressionStatement",
                                                                        expression: {
                                                                            node: "Assignment",
                                                                            leftHandSide: {
                                                                                node: "SimpleName",
                                                                                identifier: "cursor"
                                                                            },
                                                                            operator: "=",
                                                                            rightHandSide: {
                                                                                node: "SimpleName",
                                                                                identifier: "v_2"
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        node: "BreakStatement",
                                                                        label: {
                                                                            node: "SimpleName",
                                                                            identifier: "golab0"
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            expression: {
                                                                node: "BooleanLiteral",
                                                                booleanValue: false
                                                            }
                                                        }
                                                    },
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "Assignment",
                                                            leftHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: "=",
                                                            rightHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "v_2"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: ">=",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "limit"
                                                            },
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "ReturnStatement",
                                                                    expression: {
                                                                        node: "BooleanLiteral",
                                                                        booleanValue: false
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    },
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "PostfixExpression",
                                                            operand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: "++"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "golab2"
                                        },
                                        body: {
                                            node: "WhileStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: true
                                            },
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "LabeledStatement",
                                                        label: {
                                                            node: "SimpleName",
                                                            identifier: "lab3"
                                                        },
                                                        body: {
                                                            node: "DoStatement",
                                                            body: {
                                                                node: "Block",
                                                                statements: [
                                                                    {
                                                                        node: "IfStatement",
                                                                        expression: {
                                                                            node: "PrefixExpression",
                                                                            operator: "!",
                                                                            operand: {
                                                                                node: "ParenthesizedExpression",
                                                                                expression: {
                                                                                    node: "MethodInvocation",
                                                                                    expression: null,
                                                                                    typeArguments: [],
                                                                                    name: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "out_grouping"
                                                                                    },
                                                                                    arguments: [
                                                                                        {
                                                                                            node: "SimpleName",
                                                                                            identifier: "g_v"
                                                                                        },
                                                                                        {
                                                                                            node: "NumberLiteral",
                                                                                            token: "97"
                                                                                        },
                                                                                        {
                                                                                            node: "NumberLiteral",
                                                                                            token: "248"
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        },
                                                                        thenStatement: {
                                                                            node: "Block",
                                                                            statements: [
                                                                                {
                                                                                    node: "BreakStatement",
                                                                                    label: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "lab3"
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        elseStatement: null
                                                                    },
                                                                    {
                                                                        node: "BreakStatement",
                                                                        label: {
                                                                            node: "SimpleName",
                                                                            identifier: "golab2"
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            expression: {
                                                                node: "BooleanLiteral",
                                                                booleanValue: false
                                                            }
                                                        }
                                                    },
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: ">=",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "limit"
                                                            },
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "ReturnStatement",
                                                                    expression: {
                                                                        node: "BooleanLiteral",
                                                                        booleanValue: false
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    },
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "PostfixExpression",
                                                            operand: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            },
                                                            operator: "++"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "lab4"
                                        },
                                        body: {
                                            node: "DoStatement",
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "PrefixExpression",
                                                            operator: "!",
                                                            operand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "I_p1"
                                                                    },
                                                                    operator: "<",
                                                                    rightOperand: {
                                                                        node: "SimpleName",
                                                                        identifier: "I_x"
                                                                    },
                                                                }
                                                            }
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "BreakStatement",
                                                                    label: {
                                                                        node: "SimpleName",
                                                                        identifier: "lab4"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    },
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "Assignment",
                                                            leftHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "I_p1"
                                                            },
                                                            operator: "=",
                                                            rightHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "I_x"
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "r_main_suffix"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "among_var"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_2"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ket"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "among_var"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "MethodInvocation",
                                                expression: null,
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "find_among_b"
                                                },
                                                arguments: [
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "a_0"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "32"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "among_var"
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "Assignment",
                                                        leftHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "limit_backward"
                                                        },
                                                        operator: "=",
                                                        rightHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "v_2"
                                                        }
                                                    }
                                                },
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "bra"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_2"
                                            }
                                        }
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "among_var"
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            },
                                            {
                                                node: "ReturnStatement",
                                                expression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: false
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "1"
                                                }
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "slice_del"
                                                    },
                                                    arguments: []
                                                }
                                            },
                                            {
                                                node: "BreakStatement",
                                                label: null
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "2"
                                                }
                                            },
                                            {
                                                node: "IfStatement",
                                                expression: {
                                                    node: "PrefixExpression",
                                                    operator: "!",
                                                    operand: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "MethodInvocation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "in_grouping_b"
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "g_s_ending"
                                                                },
                                                                {
                                                                    node: "NumberLiteral",
                                                                    token: "97"
                                                                },
                                                                {
                                                                    node: "NumberLiteral",
                                                                    token: "229"
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                thenStatement: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ReturnStatement",
                                                            expression: {
                                                                node: "BooleanLiteral",
                                                                booleanValue: false
                                                            }
                                                        }
                                                    ]
                                                },
                                                elseStatement: null
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "slice_del"
                                                    },
                                                    arguments: []
                                                }
                                            },
                                            {
                                                node: "BreakStatement",
                                                label: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "r_consonant_pair"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_3"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_2"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_3"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ket"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "MethodInvocation",
                                                expression: null,
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "find_among_b"
                                                },
                                                arguments: [
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "a_1"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "4"
                                                    }
                                                ]
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "Assignment",
                                                        leftHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "limit_backward"
                                                        },
                                                        operator: "=",
                                                        rightHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "v_3"
                                                        }
                                                    }
                                                },
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "bra"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_3"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<=",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "--"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "bra"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "slice_del"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "r_other_suffix"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "among_var"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_3"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_4"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "lab0"
                                        },
                                        body: {
                                            node: "DoStatement",
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "Assignment",
                                                            leftHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "ket"
                                                            },
                                                            operator: "=",
                                                            rightHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "PrefixExpression",
                                                            operator: "!",
                                                            operand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "MethodInvocation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "eq_s_b"
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "NumberLiteral",
                                                                            token: "2"
                                                                        },
                                                                        {
                                                                            node: "StringLiteral",
                                                                            escapedValue: "\"st\""
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "BreakStatement",
                                                                    label: {
                                                                        node: "SimpleName",
                                                                        identifier: "lab0"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    },
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "Assignment",
                                                            leftHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "bra"
                                                            },
                                                            operator: "=",
                                                            rightHandSide: {
                                                                node: "SimpleName",
                                                                identifier: "cursor"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "PrefixExpression",
                                                            operator: "!",
                                                            operand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "MethodInvocation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "eq_s_b"
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "NumberLiteral",
                                                                            token: "2"
                                                                        },
                                                                        {
                                                                            node: "StringLiteral",
                                                                            escapedValue: "\"ig\""
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "BreakStatement",
                                                                    label: {
                                                                        node: "SimpleName",
                                                                        identifier: "lab0"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    },
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "MethodInvocation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "slice_del"
                                                            },
                                                            arguments: []
                                                        }
                                                    }
                                                ]
                                            },
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_2"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_3"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ket"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "among_var"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "MethodInvocation",
                                                expression: null,
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "find_among_b"
                                                },
                                                arguments: [
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "a_2"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "among_var"
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "0"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "Assignment",
                                                        leftHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "limit_backward"
                                                        },
                                                        operator: "=",
                                                        rightHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "v_3"
                                                        }
                                                    }
                                                },
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "bra"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_3"
                                            }
                                        }
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "among_var"
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            },
                                            {
                                                node: "ReturnStatement",
                                                expression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: false
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "1"
                                                }
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "slice_del"
                                                    },
                                                    arguments: []
                                                }
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "Assignment",
                                                    leftHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "v_4"
                                                    },
                                                    operator: "=",
                                                    rightHandSide: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "limit"
                                                        },
                                                        operator: "-",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "cursor"
                                                        },
                                                    }
                                                }
                                            },
                                            {
                                                node: "LabeledStatement",
                                                label: {
                                                    node: "SimpleName",
                                                    identifier: "lab1"
                                                },
                                                body: {
                                                    node: "DoStatement",
                                                    body: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "IfStatement",
                                                                expression: {
                                                                    node: "PrefixExpression",
                                                                    operator: "!",
                                                                    operand: {
                                                                        node: "MethodInvocation",
                                                                        expression: null,
                                                                        typeArguments: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "r_consonant_pair"
                                                                        },
                                                                        arguments: []
                                                                    }
                                                                },
                                                                thenStatement: {
                                                                    node: "Block",
                                                                    statements: [
                                                                        {
                                                                            node: "BreakStatement",
                                                                            label: {
                                                                                node: "SimpleName",
                                                                                identifier: "lab1"
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                elseStatement: null
                                                            }
                                                        ]
                                                    },
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "Assignment",
                                                    leftHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "cursor"
                                                    },
                                                    operator: "=",
                                                    rightHandSide: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "limit"
                                                        },
                                                        operator: "-",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "v_4"
                                                        },
                                                    }
                                                }
                                            },
                                            {
                                                node: "BreakStatement",
                                                label: null
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "2"
                                                }
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "slice_from"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "StringLiteral",
                                                            escapedValue: "\"l\\u00F8s\""
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                node: "BreakStatement",
                                                label: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "r_undouble"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            },
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "I_p1"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_2"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "ket"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "PrefixExpression",
                                            operator: "!",
                                            operand: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "out_grouping_b"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "g_v"
                                                        },
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "97"
                                                        },
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "248"
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "Assignment",
                                                        leftHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "limit_backward"
                                                        },
                                                        operator: "=",
                                                        rightHandSide: {
                                                            node: "SimpleName",
                                                            identifier: "v_2"
                                                        }
                                                    }
                                                },
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "bra"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "S_ch"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "MethodInvocation",
                                                expression: null,
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "slice_to"
                                                },
                                                arguments: [
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "S_ch"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_2"
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "PrefixExpression",
                                            operator: "!",
                                            operand: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "eq_v_b"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "SimpleName",
                                                            identifier: "S_ch"
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        thenStatement: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    }
                                                }
                                            ]
                                        },
                                        elseStatement: null
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "slice_del"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "stem"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_1"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_3"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_4"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v_5"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_1"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "lab0"
                                        },
                                        body: {
                                            node: "DoStatement",
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "PrefixExpression",
                                                            operator: "!",
                                                            operand: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "r_mark_regions"
                                                                },
                                                                arguments: []
                                                            }
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "BreakStatement",
                                                                    label: {
                                                                        node: "SimpleName",
                                                                        identifier: "lab0"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    }
                                                ]
                                            },
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_1"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_2"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "lab1"
                                        },
                                        body: {
                                            node: "DoStatement",
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "PrefixExpression",
                                                            operator: "!",
                                                            operand: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "r_main_suffix"
                                                                },
                                                                arguments: []
                                                            }
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "BreakStatement",
                                                                    label: {
                                                                        node: "SimpleName",
                                                                        identifier: "lab1"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    }
                                                ]
                                            },
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_2"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_3"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "lab2"
                                        },
                                        body: {
                                            node: "DoStatement",
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "PrefixExpression",
                                                            operator: "!",
                                                            operand: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "r_consonant_pair"
                                                                },
                                                                arguments: []
                                                            }
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "BreakStatement",
                                                                    label: {
                                                                        node: "SimpleName",
                                                                        identifier: "lab2"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    }
                                                ]
                                            },
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_3"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_4"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "lab3"
                                        },
                                        body: {
                                            node: "DoStatement",
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "PrefixExpression",
                                                            operator: "!",
                                                            operand: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "r_other_suffix"
                                                                },
                                                                arguments: []
                                                            }
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "BreakStatement",
                                                                    label: {
                                                                        node: "SimpleName",
                                                                        identifier: "lab3"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    }
                                                ]
                                            },
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_4"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "v_5"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "cursor"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "lab4"
                                        },
                                        body: {
                                            node: "DoStatement",
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "IfStatement",
                                                        expression: {
                                                            node: "PrefixExpression",
                                                            operator: "!",
                                                            operand: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "r_undouble"
                                                                },
                                                                arguments: []
                                                            }
                                                        },
                                                        thenStatement: {
                                                            node: "Block",
                                                            statements: [
                                                                {
                                                                    node: "BreakStatement",
                                                                    label: {
                                                                        node: "SimpleName",
                                                                        identifier: "lab4"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        elseStatement: null
                                                    }
                                                ]
                                            },
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "limit"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "v_5"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cursor"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SimpleName",
                                                identifier: "limit_backward"
                                            }
                                        }
                                    },
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "boolean"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "equals"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "Object"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "o"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "InstanceofExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "o"
                                            },
                                            rightOperand: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "danishStemmer"
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "hashCode"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ReturnStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "MethodInvocation",
                                                expression: {
                                                    node: "TypeLiteral",
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "danishStemmer"
                                                        }
                                                    }
                                                },
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "getName"
                                                },
                                                arguments: []
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hashCode"
                                            },
                                            arguments: []
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }

 );
    });
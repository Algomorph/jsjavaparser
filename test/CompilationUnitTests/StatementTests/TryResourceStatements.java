public class Test {
    public static void main(String[] args) {
        try (BufferedReader br =
                     new BufferedReader(new FileReader(path))) {
            return br.readLine();
        }
        try (final BufferedReader br =
                     new BufferedReader(new FileReader(path))) {
            return br.readLine();
        } catch (Exception ex){
            hello(ex);
        }

        try (final BufferedReader br =
                     new BufferedReader(new FileReader(path))) {
            return br.readLine();
        } finally {
            hello();
        }

        try (final BufferedReader br =
                     new BufferedReader(new FileReader(path))) {
            return br.readLine();
        } catch (Hello | World ex) {
            hello.world();
        } catch (Exception ex) {
            hello(ex);
        } finally {
            hello();
        }

        try (final @ann BufferedReader br =
                     new BufferedReader(new FileReader(path))) {
            return br.readLine();
        }

        try (
                java.util.zip.ZipFile zf = new java.util.zip.ZipFile(zipFileName);
                final java.io.BufferedWriter writer = java.nio.file.Files.newBufferedWriter(outputFilePath, charset)
        )
        {
            // Enumerate each entry
            for (java.util.Enumeration entries =
                 zf.entries(); entries.hasMoreElements();) {
                // Get the entry name and write it to the output file
                String newLine = System.getProperty("line.separator");
                String zipEntryName = ((java.util.zip.ZipEntry)entries.nextElement()).getName() + newLine;
                writer.write(zipEntryName, 0, zipEntryName.length());
            }
        }
    }
}
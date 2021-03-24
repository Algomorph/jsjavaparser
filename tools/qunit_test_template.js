test("${test_name}", function (assert) {
    const src = multiline(function () {/*
${java_source}
        */
    });
    assert.deepEqual(
        JavaParser.parse(src, {'addLocations': false})
        ,
${ast_text}
    );
});

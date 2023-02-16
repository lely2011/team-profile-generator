const engineer = require("../lib/engineer");

test("Create a GitHub.", () => {
    const testGithub = "SheldonCooper";
    const employeeSample = new engineer("Sheldon", 2, "cooper@test.com", testGithub);
    expect(employeeSample.github).toBe(testGithub);
});

test("Test getGithub to return github.", () => {
    const testGithub = "SheldonCooper";
    const employeeSample = new engineer("Sheldon", 2, "cooper@test.com", testGithub);
    expect(employeeSample.getGithub()).toBe(testGithub);
});

test("testing role.", () => {
    const returnValue = "engineer";
    const employeeSample = new engineer("Sheldon", 2, "cooper@test.com", "SheldonCooper");
    expect(employeeSample.getRole()).toBe(returnValue);
});
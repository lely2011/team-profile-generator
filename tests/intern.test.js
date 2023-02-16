const intern = require("../lib/intern");

test("Create school.", () => {
    const testSchool = "UW Bootcamp";
    const employeeSample = new intern("Sheldon", 2, "cooper@test.com", testSchool);
    expect(employeeSample.school).toBe(testSchool);
});

test("Test officeNumber to return office number.", () => {
    const testSchool = "UW Bootcamp";
    const employeeSample = new intern("Sheldon", 2, "cooper@test.com", testSchool);
    expect(employeeSample.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "intern";
    const employeeSample = new intern("Sheldon", 2, "cooper@test.com", "UW Bootcamp");
    expect(employeeSample.getRole()).toBe(returnValue);
});
const employee = require("../lib/employee");

// Test input information
test("Create a new employee.", () => {
    const employeeSample = new employee();
    expect(typeof(employeeSample)).toBe("object");
});

test("Test name.", () => {
    const name = "Sheldon";
    const employeeSample = new employee(name);
    expect(employeeSample.name).toBe(name);
});

test("Test ID.", () => {
    const id = 2;
    const employeeSample = new employee("Sheldon", id);
    expect(employeeSample.id).toBe(id);
});

test("Test email", () => {
    const email = "cooper@test.com";
    const employeeSample = new employee("Sheldon", 2, email);
    expect(employeeSample.email).toBe(email);
});

// Test get input
test("Get test name from getName method.", () => {
    const testName = "Sheldon";
    const employeeSample = new employee(testName);
    expect(employeeSample.getName()).toBe(testName);
});

test("Get test ID from getID method.", () => {
    const testId = 2;
    const employeeSample = new employee("Sheldon", testId);
    expect(employeeSample.getId()).toBe(testId);
});

test("Get test email from getEmail method.", () => {
    const testEmail = "cooper@test.com";
    const employeeSample = new employee("Sheldon", 2, testEmail);
    expect(employeeSample.getEmail()).toBe(testEmail);
});

test("Test role.", () => {
    const returnValue = "employee";
    const employeeSample = new employee("Sheldon", 2, "cooper@test.com");
    expect(employeeSample.getRole()).toBe(returnValue);
});
// @ts-check
const { test, expect } = require('@playwright/test');

//
// A test that will be commented to show passing tests in the CI pipeline
// Uncomment the failing assertion to demonstrate pipeline failure handling
//
test("intentional failure test example - currently disabled", async ({ page }) => {
    // This test is designed to fail to show how the CI pipeline handles failures
    // Uncomment the line below to make the test fail
    // expect(true).toBe(false);
    
    // For now, this test just passes
    expect(true).toBe(true);
});


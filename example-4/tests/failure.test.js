// @ts-check
const { test, expect } = require('@playwright/test');

//
// A test that will intentionally fail to demonstrate CI pipeline with failing tests
//
test("intentional failure test example", async ({ page }) => {
    // This test is designed to fail to show how the CI pipeline handles failures
    // Comment out this line to make the test pass
    expect(true).toBe(false);
});

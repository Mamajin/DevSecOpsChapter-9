// @ts-check
const { test, expect } = require('@playwright/test');

//
// A test that will intentionally fail to demonstrate CI pipeline with failing tests
//
test("intentional failure test example - ENABLED FOR DEMONSTRATION", async ({ page }) => {
    // This test is designed to fail to show how the CI pipeline handles failures
    // This assertion is uncommented to show a failing test scenario
    expect(true).toBe(false); // This will FAIL intentionally
});


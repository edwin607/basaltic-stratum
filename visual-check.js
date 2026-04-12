const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to desktop
  await page.setViewportSize({ width: 1920, height: 1200 });
  
  // Navigate to the site
  await page.goto('https://a793a0a8.basaltic-stratum.pages.dev');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Wait a bit more for animations
  await page.waitForTimeout(2000);
  
  // Take screenshot of initial state
  await page.screenshot({ path: '/Users/eolivera/Documents/experiments/folder/screenshot-desktop.png', fullPage: true });
  
  console.log('Desktop screenshot saved!');
  
  // Hover over first folder
  const firstFolder = page.locator('.folder-container').first();
  await firstFolder.hover();
  await page.waitForTimeout(500);
  
  // Take screenshot with hover
  await page.screenshot({ path: '/Users/eolivera/Documents/experiments/folder/screenshot-hover.png', fullPage: true });
  
  console.log('Hover screenshot saved!');
  
  // Check viewport elements
  const bgColor = await page.evaluate(() => {
    return getComputedStyle(document.body).backgroundColor;
  });
  console.log('Body background:', bgColor);
  
  // Check folder count
  const folderCount = await page.locator('.folder-container').count();
  console.log('Folder count:', folderCount);
  
  // Get folder labels
  const labels = await page.locator('.folder-label').allTextContents();
  console.log('Folder labels:', labels);
  
  // Get header text
  const headerText = await page.locator('.header-slug').textContent();
  console.log('Header:', headerText);
  
  // Check CSS variables
  const rootVars = await page.evaluate(() => {
    const style = getComputedStyle(document.documentElement);
    return {
      dark: style.getPropertyValue('--basalt-dark').trim(),
      accent: style.getPropertyValue('--accent-teal').trim(),
      purple: style.getPropertyValue('--accent-purple').trim()
    };
  });
  console.log('CSS Variables:', rootVars);
  
  await browser.close();
})();
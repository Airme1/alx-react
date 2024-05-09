import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";



test("Returns full Year", () => {
  expect(getFullYear()).toBe(new Date.getFullYear());
});

test("Footer information when true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("Footer information when false", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("Notification message", () => {
  expect(getLatestNotification()).toBe(msg);
});

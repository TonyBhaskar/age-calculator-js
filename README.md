# Age Calculator

This project is a simple web-based age calculator that computes the difference between a user's date of birth and the current date. The result is displayed in years, months, and days.

## Features

- **Real-Time Input:** The calculation is triggered automatically after the user inputs the day, month, and year.
- **Input Validation:** Handles two-digit year inputs by assuming a logical century (e.g., "20" becomes "2020").
- **Accurate Date Calculations:** The script adjusts for negative values in months and days to ensure correct age calculation.

## Usage

1. **Input Fields:**
   - **Day:** Enter the day of birth (e.g., `15`).
   - **Month:** Enter the month of birth (e.g., `06` for June).
   - **Year:** Enter the year of birth. You can use two digits (e.g., `20`) or four digits (e.g., `2020`).

2. **Calculation:** 
   - The age difference is automatically calculated and displayed after 1 second of no input.
   - The result is shown in the format: `Years`, `Months`, and `Days`.

## Code Overview

### HTML Structure

```html
<span id="years-span"></span> Years
<span id="months-span"></span> Months
<span id="days-span"></span> Days

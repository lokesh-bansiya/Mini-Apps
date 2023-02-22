# Stock Broker

## `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don’t jump directly into the code.
- Commit your code every 30 minutes with a proper commit message to your repository (we will monitor every commit)
- Use React to solve this question.
- **Use redux for network requests and state management.**
- Use only **Chakra UI as a CSS library**.

---

## `**Problem Statement**`

- The task is to build a stock broker app with two levels of access, admin access and user access. The admin should be able to list and manage stocks, where as the user should be able to buy stocks and track their portfolio.
- Your app should have two levels of access
    - Admin Access
    - User Access
- Your app should have the following routes
    - Register route (/register)
    - Login route  (/login)
    - Dashboard route (/dashboard) → Admin Only Access
    - Stocks route (/stocks) → User Only Access
    - Portfolio route (/portfolio) → User Only Access
    

---

## `**Login & Register Route**`

- Both admin and user should be able to login through the same login form.
- Admin need not register. Admin should be able to login directly using the following credentials

```
**Admin Credentials**

email : admin@stockbroker.com
password : admin123
```

- If the admin is authenticated by the above credentials, redirect admin to the admin dashboard page.
- The user should be able to register with the following details
    - Username
    - Email
    - Password
- Once the user submits the input data, store that data in JSON server on route **“/users”**
- Once the user is registered, the user should be redirected to the login tab.
- When a user fills in credentials, match the entered data with the JSON server data you stored while signing up. Display an alert - if login is a success, show a message in the alert box as `login successful`, else show a message as `login failed`
- After successful login, the user should be redirected to the stocks page.

---

## **`Admin Dashboard Route`**

- This admin should be able to list new stocks and manage the existing ones by updating or removing them.
- This page should have a form that takes the following information
    - Company Logo
    - Company Name
    - Company Type ( should be a **select tag** with Bank, IT, Automobile, Pharma, and Oil as options)
    - Stock Exchange (should be a **select tag** with NSE and BSE as options)
    - Total Shares
    - Cost Per Share
    - Price Action
    - List Stock Button
- When admin submits the form, post data to JSON server on route “**/companies**” (POST request)
- Sample JSON data

```json
[
	{
		"id" : 1,
    "company_logo": "https://logolook.net/wp-content/uploads/2021/11/HDFC-Bank-Logo.png",
    "company_name": "HDFC Bank",
    "company_type": "Bank",
		"stock_exchange": "NSE",
		"total_shares": 50000,
		"cost_per_share": 4210,
		"price_action": 12,
  },
  {
		"id" : 2,
    "company_logo": "https://www.jetspot.in/wp-content/uploads/2018/03/reliance-logo.jpg",
    "company_name": "Reliance Industries",
    "company_type": "Oil",
		"stock_exchange": "BSE",
		"total_shares": 20000,
		"cost_per_share": 2132,
		"price_action": 4,
  }
]
```

- Use a JSON server to manage the data (using local storage or dummy data will lead to disqualification).
- The admin should be able to manage all the existing listed companies.
- Fetch the data from the JSON server (”**/companies”)** and display it in table format below the form.
- The table should contain the following fields as columns
    - Company logo
    - Company name
    - Company Type
    - Stock Exchange
    - Total shares
    - Cost per share
    - Price action
    - Edit Stock Button
    - Delete Stock Button
- When admin clicks on edit, admin should be able to edit/change details of the stock in JSON data (you can use a modal for this) and display updated data in the table.
- When clicking on Delete, delete that particular entry from the front-end as well as from the JSON backend.

---

## `**Stocks Route**`

- Fetch all the data of companies from the JSON server and display them in form of cards.
- **Pagination should be implemented here** with only 4 cards displayed per page.
- There should be a input field to enter quantity and a Buy button appended to each of the stocks.

![Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/025acb67-06c0-486f-9765-bfae29db56b6/Reference_Image.png)

Reference Image

- The user should be able to buy the stocks by clicking on the Buy button and store this data in JSON Server.
- This page should have a filter and sort functionality
    - Filter based on Company Type
        - Bank
        - IT
        - Automobile
        - Pharma
        - Oil
    - Sort based on the cost per share
        - Low to High
        - High to Low
    

---

## `**Porfolio Route**`

- All the stocks bought by the user should be displayed on this page in the form of tables with the total number of shares owned as a column.
- Also render a Pie Chart using Chart.js as a visual representation of the users’ portfolio

![Chart.js Pie Chart Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bb99d39-cd79-4b2c-828d-0e510a7f0898/download.png)

Chart.js Pie Chart Reference Image

---

### **`Submission`**

- Please submit deployed link and Github link of code.
- ***Deploy JSON server too.
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it)
- Any issues in deployed link, will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### **`Rubrics`**

- CRUD Operations
- JSON server
- Redux
- Chakra UI
- Chart.js
- Filter, Sort and Pagination functionality
- Code cleanliness and folder structure.
SELECT Name as 'Customers' FROM Customers WHERE Id NOT IN (SELECT CustomerId from Orders);
/* 这道题一定得加上Name as 'Customers'，不然会因为header不同报错。 */
-- Insert a set of records into department.
INSERT INTO department (id, name) VALUES (1, "Banking");
INSERT INTO department (id, name) VALUES (2, "Risk Managment");
INSERT INTO department (id, name) VALUES (3, "Information Security");
INSERT INTO department (id, name) VALUES (4, "Human Resources");


-- Insert a set of records into role.
INSERT INTO role (id, title, salary, department) VALUES (5, "Bank Teller", 50,000, 1);
INSERT INTO role (id, title, salary, department) VALUES (6, "Risk Managment Specialist", 62,000, 2);
INSERT INTO role (id, title, salary, department) VALUES (7, "Risk Manager", 70,000, 2);
INSERT INTO role (id, title, salary, department) VALUES (8, "Cyber Security", 100,000, 3);
INSERT INTO role (id, title, salary, department) VALUES (9, "HR Manager", 60,000, 4);
INSERT INTO role (id, title, salary, department) VALUES (10, "Data Center Security Engineer", 75,000, 3);


-- Insert a set of records into employee.
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (11, "Rhonda", "Galepegos",5, 18);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (12, "Daniel", "Madden",8, 19);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (13, "Mandy", "Lane",7, 20);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (14, "Queen", "Kite",10, 19);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (15, "Gabriella", "Link",6, 20);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (16, "Sharon", "Stallion",9, 21);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (17, "Monique", "Carter",8, 18);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (18, "Alexander", "Smith",5, 21);


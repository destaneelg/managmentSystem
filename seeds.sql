-- Insert a set of records into department.
INSERT INTO department (id, name) VALUES (90, "");
INSERT INTO department (id, name) VALUES (80, "");
INSERT INTO department (id, name) VALUES (20, "");
INSERT INTO department (id, name) VALUES (70, "");


-- Insert a set of records into role.
INSERT INTO role (id, title, salary, department) VALUES (90, "", .111, 1);
INSERT INTO role (id, title, salary, department) VALUES (80, "", .111, 1);
INSERT INTO role (id, title, salary, department) VALUES (20, "", .111, 1);
INSERT INTO role (id, title, salary, department) VALUES (70, "", .111, 1);

-- Insert a set of records into employee.
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (90, "", "",1, 1);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (80, "", "",1, 1);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (20, "", "",1, 1);
INSERT INTO employee (id, firstName, lastName, roleId, managerId) VALUES (70, "", "",1, 1);



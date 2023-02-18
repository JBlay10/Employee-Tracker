INSERT INTO department
(department_name)

VALUES 
("Managers"),
("Kitchen Staff"),
("Service Staff"),
("Support Staff");

INSERT INTO employee_roles
(title, salary, department_id)

VALUES
("General Manager", 80000, 1),
("Head Chef", 100000, 1),
("Bar Manager", 60000, 1),
("Service Manager", 60000, 1),
("Kitchen Manager", 50000, 1),
("Bartender", 80000, 2),
("Server", 60000, 2),
("Server Assistant", 30000, 3),
("Host", 30000, 2),
("Prep Cook", 35000, 4),
("Line Cook", 45000, 4);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)

VALUES 
("Jose", "Blay", 1, NULL),
("Samu", "Vargas", 2, 1),
("Aryan", "Rakhyani", 3, 2),
("Joel", "Kourany", 4, NULL),
("Andrea", "Botero", 5, 1),
("Camila", "Gori", 6, NULL),
("Monica", "Solis", 7, 4),
("Emilio", "Mejia", 8, NULL),
("Gia", "Mejia", 9, NULL),
("Ricardo", "Velez", 10, 7),
("Bob", "Lee", 11, 3);
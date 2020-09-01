# Combined
dev:  run-backend run-frontend
install: install-frontend install-backend

# Frontend
run-frontend:
	npm --prefix ./frontend run start

install-frontend:
	npm --prefix ./frontend install

# Backend
run-backend:
	npm --prefix ./serverside run start

install-backend:
	npm --prefix ./serverside install
db-create:
	createdb testpage

db-migrate:
	npm --prefix ./serverside run migrate:up

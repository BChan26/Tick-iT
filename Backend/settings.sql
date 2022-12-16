CREATE DATABASE tickets;
CREATE USER ticketuser WITH PASSWORD 'ticketpassword';
GRANT ALL PRIVILEGES ON DATABASE tickets TO ticketuser;
GRANT postgres TO ticketuser;
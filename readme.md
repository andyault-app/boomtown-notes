# First Run

## Initializing the database

From the project directory, run `cp database/database.sqlite.example database/database.sqlite`.

## Initializing environment variables

From the project directory, run `cp .env.example .env`;

## If you're using Homestead

If this is your first time running the project, run `cp Homestead.yaml.example Homestead.yaml`. Then, open the
`Homestead.yaml` file, and make any necessary changes.

# Starting the server

## With Homestead

From the project directory, run `vagrant up`. The server will be available at `homestead.test`.

If the server can't be found at that address, it may be necessary to add `192.168.10.10  homestead.test` to your `hosts`
file.

### Stopping the Homestead server

From the project directory, run `vagrant destroy -f`.

## Without Homestead

From the project directory, run `php artisan serve`. The server will be available at `localhost:8000`.
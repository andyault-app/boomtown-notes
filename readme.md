# Starting the server

## With Homestead

If this is your first time running the project, run `cp Homestead.yaml.example Homestead.yaml`. Then, open the
`Homestead.yaml` file, and make any necessary changes.

From the project directory, run `vagrant up`. The server will be available at `homestead.test`.

If the server can't be found at that address, it may be necessary to add `192.168.10.10  homestead.test` to your `hosts`
file.

## Without Homestead

From the project directory, run `php artisan serve`. The server will be available at `localhost:8000`.
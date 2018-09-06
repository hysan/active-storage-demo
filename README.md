# README

Minimal Setup:

```sh
rails new --api backend
create-react-app frontend

cd backend

# Do CORS stuff.

bundle install

# bundle exec rails activestorage:install
rails active_storage:install

rails g resource cat name:text
# Running via Spring preloader in process 25823
#       invoke  active_record
#       create    db/migrate/20180906020214_create_cats.rb
#       create    app/models/cat.rb
#       invoke    test_unit
#       create      test/models/cat_test.rb
#       create      test/fixtures/cats.yml
#       invoke  controller
#       create    app/controllers/cats_controller.rb
#       invoke    test_unit
#       create      test/controllers/cats_controller_test.rb
#       invoke  resource_route
#        route    resources :cats

rails db:create db:migrate db:seed
```

## Resources

Unsorted and just a dump of everything I read to get to a working example:

- https://github.com/rails/rails/tree/master/activestorage
- https://edgeguides.rubyonrails.org/active_storage_overview.html
- https://evilmartians.com/chronicles/rails-5-2-active-storage-and-beyond
- https://medium.com/@wrburgess/a-comprehensive-list-of-activestorage-tutorials-for-rails-5-2-8ea7d4ea267e
- https://gorails.com/episodes/file-uploading-with-activestorage-rails-5-2
- https://github.com/rails/rails/issues/31581
- https://stackoverflow.com/questions/51148547/activestorage-retrieving-file-url
- https://stackoverflow.com/questions/50340043/get-path-to-activestorage-file-on-disk
- https://stackoverflow.com/questions/51110789/activestorage-service-url-rails-blob-path-cannot-generate-full-url-when-not-u
- https://stackoverflow.com/questions/5691727/how-to-set-config-action-controller-default-url-options-host-on-per#5725343
- https://stackoverflow.com/questions/51110789/activestorage-service-url-rails-blob-path-cannot-generate-full-url-when-not-u

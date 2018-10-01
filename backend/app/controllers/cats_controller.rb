class CatsController < ApplicationController
    before_action :set_storage_url, only: [:create, :show]

    def create
        @cat = Cat.create(cat_params)
        # If you want to get just the path without the base_url,
        # another way to do this is like this; you can also specify
        # other flags like saying this should be an attachment, etc...
        # rails_blob_path(@cat.image, disposition: 'attachment')
        @cat.image.attach(cat_params[:image])
        render json: {
            name: @cat.name,
            url: url_for(@cat.image)
        }
    end

    def show
        @cat = Cat.find(params[:id])
        render json: {
            name: @cat.name,
            url: @cat.image.service_url
        }
    end

    private

    def cat_params
        params.permit(:name, :image)
    end

    def set_storage_url
        ActiveStorage::Current.host = request.base_url
    end
end

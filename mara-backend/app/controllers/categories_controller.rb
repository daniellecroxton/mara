class CategoriesController < ApplicationController

    def index
        @categories = Category.all
        render :json => @categories, each_serializer: CategorySerializer, status: 200
    end

end

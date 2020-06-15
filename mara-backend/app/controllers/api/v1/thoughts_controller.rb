class Api::V1::ThoughtsController < ApplicationController

    def index
        @thoughts = Thought.all
        
        render :json => @thoughts, each_serializer: ThoughtSerializer, status: 200
    end

    def create
        @thought = Thought.new(thought_params)
        if @thought.save     
            render :json => @thought, each_serializer: ThoughtSerializer, status: 201
        else
            render json: { errors: @thought.errors.full_messages }, status: 422
        end
    end

    private

    def thought_params
        params.require(:thought).permit(:text, :category, :category_id)
    end

end
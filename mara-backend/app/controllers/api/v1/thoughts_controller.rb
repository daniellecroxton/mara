class Api::V1::ThoughtsController < ApplicationController

def index
    @thoughts = Thought.all
    render json: @thoughts
end

def create
    @thought.new(thought_params)
    if @thought.save
        render json: @thought, status: :accepted
    else
        render json: { errors: @thought.errors.full_messages }, status: :unprocessible_entity
    end
end

private

def thought_params
    params.permit(:text, :user)
end

end

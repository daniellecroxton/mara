class Api::V1::ThoughtsController < ApplicationController

def index
    @thoughts = Thought.all
    render :json => @thoughts, each_serializer: ThoughtSerializer, status: 200
end

def create
    # binding.pry
    @thought = Thought.new(thought_params)
    if @thought.save        
        render :json => @thoughts, each_serializer: ThoughtSerializer, status: 201
    else
        render json: { errors: @thought.errors.full_messages }, status: 422
    end
end

private

def thought_params
    params.require(:thought).permit(:text)
end

end


# ISSUES
# 1. When trying to submit input getting errors:
#     - Rendered ActiveModel::Serializer::Null with Hash
#     - Processing by Api::V1::ThoughtsController#create as */*
#         Parameters: {"thought"=>{}}
#         Completed 400 Bad Request in 1ms (ActiveRecord: 0.0ms)
#     - ​<ActionController::ParameterMissing: param is missing or the value is empty: thought>"
#
# Related to creating while using serializers?
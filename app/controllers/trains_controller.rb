class TrainsController < ApplicationController

    def index
       render json: Train.all, status: :ok
    end

    def show
        train = find_train
        render json: train, status: :ok
    end

    private

    def find_train
        Train.find(params[:id])
    end

end

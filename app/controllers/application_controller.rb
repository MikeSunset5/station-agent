class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_message
    before_action :authorize

    def hello_world
     session[:count] = (session[:count] || 0) + 1
     render json: { count: session[:count] }
    end

    private
  
    def authorize
      @current_user = User.find_by(id: session[:user_id])
  
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def record_not_found_message(error)
      render json: {error: "#{error.model} not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

 
end

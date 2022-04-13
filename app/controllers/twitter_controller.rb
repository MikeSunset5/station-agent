require 'net/http'
require 'uri'
require 'json'

class TwitterController < ApplicationController
    
    skip_before_action :authorize, only: [:tweets]

    def tweets 
        url = URI("https://api.twitter.com/2/users/66379182/tweets?tweet.fields=text&exclude=replies")
    
        https = Net::HTTP.new(url.host, url.port)
        https.use_ssl = true
    
        request = Net::HTTP::Get.new(url)
        request["Authorization"] = "Bearer AAAAAAAAAAAAAAAAAAAAACupbQEAAAAAX4YDRCSHJLcBbPYJ8wJfWDUInC0%3DwcwMszPz9s86LHHGBDK1gUV9UO194FY4OVNjPF98LdvRSSVnSD"
        request["Cookie"] = "guest_id=v1%3A164978625730891291; guest_id_ads=v1%3A164978625730891291; guest_id_marketing=v1%3A164978625730891291; personalization_id=\"v1_H98fe+/ITLZqtVv5p/5O4Q==\""
    
        response = https.request(request)
        JSON.parse(response.body)
        render json: response.body
    end

end

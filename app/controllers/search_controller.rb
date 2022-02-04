class SearchController < ApplicationController
  def index
    qi_search_client = QiUniverse::SDK::Search::Client.new('UO63nr0TiL2IMzZpewDBR6sQ6xGJ4Lxw1HhnIbb3',
      qors_api_key: QORS_API_KEY)
    
    if params[:query].present?
      response = qi_search_client.autocomplete_by_query(params[:query])
    end
    respond_to do |format|
      format.html
      format.json { render json: { search_result: response } }
    end
  end
end

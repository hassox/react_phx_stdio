defmodule ReactPhxStdio.SinglePageController do
  use ReactPhxStdio.Web, :controller

  def index(conn, params) do
    render conn, "index.html", message: Map.get(params, "message")
  end
end

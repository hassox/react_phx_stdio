defmodule ReactPhxStdio.PageController do
  use ReactPhxStdio.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

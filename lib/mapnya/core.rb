module Nyaplot
  add_extension("Mapnya")
  add_additional_library("Mapnya","https://rawgit.com/wstrinz/nyaplot/js-es6/lib/mapnya/js/dist/mapnya.iife")
  init_iruby if defined? IRuby
end

# -*- coding: utf-8 -*-
=begin
  --------------------------------------------------------------------------------------------------------------------
  <copyright company="Aspose" file="aspose_html.rb">
  </copyright>
   Copyright (c) 2018 Aspose.HTML for Cloud
  <summary>
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
 
   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
 
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.
  </summary>
  --------------------------------------------------------------------------------------------------------------------
=end

# Common files
require 'aspose_html/api_client'
require 'aspose_html/api_error'
require 'aspose_html/version'
require 'aspose_html/configuration'

# APIs HTML
require 'aspose_html/api/html_api'

# APIs Storage
require 'aspose_html/api/storage_api'

# Models Storage
require 'aspose_html/models/disc_usage'
require 'aspose_html/models/file_detail'
require 'aspose_html/models/file_exist'
require 'aspose_html/models/message_response'
require 'aspose_html/models/disc_usage_response'
require 'aspose_html/models/file_exist_response'
require 'aspose_html/models/file_version'
require 'aspose_html/models/file_versions_response'
require 'aspose_html/models/file_details_response'
require 'aspose_html/models/move_file_response'
require 'aspose_html/models/move_folder_response'
require 'aspose_html/models/remove_file_response'
require 'aspose_html/models/remove_folder_response'
require 'aspose_html/models/storage_exist_response'


module AsposeHtml
  class << self
    def configure(args)
      if block_given?
        yield(Configuration.default(args))
      else
        Configuration.default(args)
      end
    end
  end
end

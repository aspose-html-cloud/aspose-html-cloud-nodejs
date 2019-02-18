# -*- coding: utf-8 -*-
=begin
  --------------------------------------------------------------------------------------------------------------------
  <copyright company="Aspose" file="html_api.rb">
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

require "uri"


module AsposeHtml
  class HtmlApi
    attr_accessor :api_client

    def initialize(args)
      @api_client = AsposeHtml::ApiClient.default(args)
    end


################################################################################
#                             Conversion Api
################################################################################


# Convert the HTML document from the storage by its name to the specified image format.
#
# @param name Document name.
# @param out_format Resulting image format.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [Integer] :x_resolution Horizontal resolution of resulting image.
# @option opts [Integer] :y_resolution Vertical resolution of resulting image.
# @option opts [String] :folder The source document folder.
# @option opts [String] :storage The source document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_convert_document_to_image(name, out_format, opts = {})
      data, _status_code, _headers = get_convert_document_to_image_with_http_info(name, out_format, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Convert the HTML document from the storage by its name to the specified image format.
#
# @param name Document name.
# @param out_format Resulting image format.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [Integer] :x_resolution Horizontal resolution of resulting image.
# @option opts [Integer] :y_resolution Vertical resolution of resulting image.
# @option opts [String] :folder The source document folder.
# @option opts [String] :storage The source document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_convert_document_to_image_with_http_info(name, out_format, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_convert_document_to_image ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_convert_document_to_image"
      end
      # verify the required parameter 'out_format' is set
      if @api_client.config.client_side_validation && out_format.nil?
        fail ArgumentError, "Missing the required parameter 'out_format' when calling HtmlApi.get_convert_document_to_image"
      end
      # resource path
      local_var_path = "/html/{name}/convert/image/{outFormat}".sub('{' + 'name' + '}', name.to_s).sub('{' + 'outFormat' + '}', out_format.to_s)

      # query parameters
      query_params = {}
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'xResolution'] = opts[:'x_resolution'] if !opts[:'x_resolution'].nil?
      query_params[:'yResolution'] = opts[:'y_resolution'] if !opts[:'y_resolution'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_convert_document_to_image\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Convert the HTML page from the web by its URL to the specified image format.
#
# @param source_url Source page URL.
# @param out_format Resulting image format.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [Integer] :x_resolution Horizontal resolution of resulting image.
# @option opts [Integer] :y_resolution Vertical resolution of resulting image.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_convert_document_to_image_by_url(source_url, out_format, opts = {})
      data, _status_code, _headers = get_convert_document_to_image_by_url_with_http_info(source_url, out_format, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Convert the HTML page from the web by its URL to the specified image format.
#
# @param source_url Source page URL.
# @param out_format Resulting image format.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [Integer] :x_resolution Horizontal resolution of resulting image.
# @option opts [Integer] :y_resolution Vertical resolution of resulting image.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_convert_document_to_image_by_url_with_http_info(source_url, out_format, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_convert_document_to_image_by_url ..."
      end
      # verify the required parameter 'source_url' is set
      if @api_client.config.client_side_validation && source_url.nil?
        fail ArgumentError, "Missing the required parameter 'source_url' when calling HtmlApi.get_convert_document_to_image_by_url"
      end
      # verify the required parameter 'out_format' is set
      if @api_client.config.client_side_validation && out_format.nil?
        fail ArgumentError, "Missing the required parameter 'out_format' when calling HtmlApi.get_convert_document_to_image_by_url"
      end
      # resource path
      local_var_path = "/html/convert/image/{outFormat}".sub('{' + 'outFormat' + '}', out_format.to_s)

      # query parameters
      query_params = {}
      query_params[:'sourceUrl'] = source_url
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'xResolution'] = opts[:'x_resolution'] if !opts[:'x_resolution'].nil?
      query_params[:'yResolution'] = opts[:'y_resolution'] if !opts[:'y_resolution'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_convert_document_to_image_by_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Convert the HTML document from the storage by its name to PDF.
#
# @param name Document name.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_convert_document_to_pdf(name, opts = {})
      data, _status_code, _headers = get_convert_document_to_pdf_with_http_info(name, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Convert the HTML document from the storage by its name to PDF.
#
# @param name Document name.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_convert_document_to_pdf_with_http_info(name, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_convert_document_to_pdf ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_convert_document_to_pdf"
      end
      # resource path
      local_var_path = "/html/{name}/convert/pdf".sub('{' + 'name' + '}', name.to_s)

      # query parameters
      query_params = {}
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_convert_document_to_pdf\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Convert the HTML page from the web by its URL to PDF.
#
# @param source_url Source page URL.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_convert_document_to_pdf_by_url(source_url, opts = {})
      data, _status_code, _headers = get_convert_document_to_pdf_by_url_with_http_info(source_url, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Convert the HTML page from the web by its URL to PDF.
#
# @param source_url Source page URL.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_convert_document_to_pdf_by_url_with_http_info(source_url, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_convert_document_to_pdf_by_url ..."
      end
      # verify the required parameter 'source_url' is set
      if @api_client.config.client_side_validation && source_url.nil?
        fail ArgumentError, "Missing the required parameter 'source_url' when calling HtmlApi.get_convert_document_to_pdf_by_url"
      end
      # resource path
      local_var_path = "/html/convert/pdf"

      # query parameters
      query_params = {}
      query_params[:'sourceUrl'] = source_url
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_convert_document_to_pdf_by_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Convert the HTML document from the storage by its name to XPS.
#
# @param name Document name.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_convert_document_to_xps(name, opts = {})
      data, _status_code, _headers = get_convert_document_to_xps_with_http_info(name, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Convert the HTML document from the storage by its name to XPS.
#
# @param name Document name.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_convert_document_to_xps_with_http_info(name, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_convert_document_to_xps ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_convert_document_to_xps"
      end
      # resource path
      local_var_path = "/html/{name}/convert/xps".sub('{' + 'name' + '}', name.to_s)

      # query parameters
      query_params = {}
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_convert_document_to_xps\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Convert the HTML page from the web by its URL to XPS.
#
# @param source_url Source page URL.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_convert_document_to_xps_by_url(source_url, opts = {})
      data, _status_code, _headers = get_convert_document_to_xps_by_url_with_http_info(source_url, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Convert the HTML page from the web by its URL to XPS.
#
# @param source_url Source page URL.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting image width.
# @option opts [Integer] :height Resulting image height.
# @option opts [Integer] :left_margin Left resulting image margin.
# @option opts [Integer] :right_margin Right resulting image margin.
# @option opts [Integer] :top_margin Top resulting image margin.
# @option opts [Integer] :bottom_margin Bottom resulting image margin.
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_convert_document_to_xps_by_url_with_http_info(source_url, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_convert_document_to_xps_by_url ..."
      end
      # verify the required parameter 'source_url' is set
      if @api_client.config.client_side_validation && source_url.nil?
        fail ArgumentError, "Missing the required parameter 'source_url' when calling HtmlApi.get_convert_document_to_xps_by_url"
      end
      # resource path
      local_var_path = "/html/convert/xps"

      # query parameters
      query_params = {}
      query_params[:'sourceUrl'] = source_url
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_convert_document_to_xps_by_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end


# Converts the HTML document (in request content) to the specified image format and uploads resulting file to storage.
#
# @param out_path Full resulting filename (ex. /folder1/folder2/result.jpg)
# @param out_format
# @param file A file to be converted.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @option opts [Integer] :resolution Resolution of resulting image. Default is 96 dpi.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def put_convert_document_in_request_to_image(out_path, out_format, file, opts = {})
      data, _status_code, _headers = put_convert_document_in_request_to_image_with_http_info(out_path, out_format, file, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Converts the HTML document (in request content) to the specified image format and uploads resulting file to storage.
#
# @param out_path Full resulting filename (ex. /folder1/folder2/result.jpg)
# @param out_format
# @param file A file to be converted.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @option opts [Integer] :resolution Resolution of resulting image. Default is 96 dpi.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def put_convert_document_in_request_to_image_with_http_info(out_path, out_format, file, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: ConversionApi.put_convert_document_in_request_to_image ..."
      end
      # verify the required parameter 'out_path' is set
      if @api_client.config.client_side_validation && out_path.nil?
        fail ArgumentError, "Missing the required parameter 'out_path' when calling ConversionApi.put_convert_document_in_request_to_image"
      end
      # verify the required parameter 'out_format' is set
      if @api_client.config.client_side_validation && out_format.nil?
        fail ArgumentError, "Missing the required parameter 'out_format' when calling ConversionApi.put_convert_document_in_request_to_image"
      end
      # verify the required parameter 'file' is set
      if @api_client.config.client_side_validation && file.nil?
        fail ArgumentError, "Missing the required parameter 'file' when calling ConversionApi.put_convert_document_in_request_to_image"
      end
      # resource path
      local_var_path = "/html/convert/image/{outFormat}".sub('{' + 'outFormat' + '}', out_format.to_s)

      # query parameters
      query_params = {}
      query_params[:'outPath'] = out_path
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'resolution'] = opts[:'resolution'] if !opts[:'resolution'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/octet-stream'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = ::File.open(file,"rb").read

      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: ConversionApi#put_convert_document_in_request_to_image\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Converts the HTML document (in request content) to PDF and uploads resulting file to storage.
#
# @param out_path Full resulting filename (ex. /folder1/folder2/result.pdf)
# @param file A file to be converted.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def put_convert_document_in_request_to_pdf(out_path, file, opts = {})
      data, _status_code, _headers = put_convert_document_in_request_to_pdf_with_http_info(out_path, file, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Converts the HTML document (in request content) to PDF and uploads resulting file to storage.
#
# @param out_path Full resulting filename (ex. /folder1/folder2/result.pdf)
# @param file A file to be converted.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def put_convert_document_in_request_to_pdf_with_http_info(out_path, file, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: ConversionApi.put_convert_document_in_request_to_pdf ..."
      end
      # verify the required parameter 'out_path' is set
      if @api_client.config.client_side_validation && out_path.nil?
        fail ArgumentError, "Missing the required parameter 'out_path' when calling ConversionApi.put_convert_document_in_request_to_pdf"
      end
      # verify the required parameter 'file' is set
      if @api_client.config.client_side_validation && file.nil?
        fail ArgumentError, "Missing the required parameter 'file' when calling ConversionApi.put_convert_document_in_request_to_pdf"
      end
      # resource path
      local_var_path = "/html/convert/pdf"

      # query parameters
      query_params = {}
      query_params[:'outPath'] = out_path
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/octet-stream'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = ::File.open(file,"rb").read
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: ConversionApi#put_convert_document_in_request_to_pdf\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Converts the HTML document (in request content) to XPS and uploads resulting file to storage.
#
# @param out_path Full resulting filename (ex. /folder1/folder2/result.xps)
# @param file A file to be converted.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def put_convert_document_in_request_to_xps(out_path, file, opts = {})
      data, _status_code, _headers = put_convert_document_in_request_to_xps_with_http_info(out_path, file, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Converts the HTML document (in request content) to XPS and uploads resulting file to storage.
#
# @param out_path Full resulting filename (ex. /folder1/folder2/result.xps)
# @param file A file to be converted.
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def put_convert_document_in_request_to_xps_with_http_info(out_path, file, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: ConversionApi.put_convert_document_in_request_to_xps ..."
      end
      # verify the required parameter 'out_path' is set
      if @api_client.config.client_side_validation && out_path.nil?
        fail ArgumentError, "Missing the required parameter 'out_path' when calling ConversionApi.put_convert_document_in_request_to_xps"
      end
      # verify the required parameter 'file' is set
      if @api_client.config.client_side_validation && file.nil?
        fail ArgumentError, "Missing the required parameter 'file' when calling ConversionApi.put_convert_document_in_request_to_xps"
      end
      # resource path
      local_var_path = "/html/convert/xps"

      # query parameters
      query_params = {}
      query_params[:'outPath'] = out_path
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/octet-stream'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = ::File.open(file,"rb").read
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: ConversionApi#put_convert_document_in_request_to_xps\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Converts the HTML document (located on storage) to the specified image format and uploads resulting file to storage.
#
# @param name Document name.
# @param out_path Full resulting filename (ex. /folder1/folder2/result.jpg)
# @param out_format
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @option opts [Integer] :resolution Resolution of resulting image. Default is 96 dpi.
# @option opts [String] :folder The source document folder.
# @option opts [String] :storage The source and resulting document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def put_convert_document_to_image(name, out_path, out_format, opts = {})
      data, _status_code, _headers = put_convert_document_to_image_with_http_info(name, out_path, out_format, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Converts the HTML document (located on storage) to the specified image format and uploads resulting file to storage.
#
# @param name Document name.
# @param out_path Full resulting filename (ex. /folder1/folder2/result.jpg)
# @param out_format
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @option opts [Integer] :resolution Resolution of resulting image. Default is 96 dpi.
# @option opts [String] :folder The source document folder.
# @option opts [String] :storage The source and resulting document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def put_convert_document_to_image_with_http_info(name, out_path, out_format, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: ConversionApi.put_convert_document_to_image ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling ConversionApi.put_convert_document_to_image"
      end
      # verify the required parameter 'out_path' is set
      if @api_client.config.client_side_validation && out_path.nil?
        fail ArgumentError, "Missing the required parameter 'out_path' when calling ConversionApi.put_convert_document_to_image"
      end
      # verify the required parameter 'out_format' is set
      if @api_client.config.client_side_validation && out_format.nil?
        fail ArgumentError, "Missing the required parameter 'out_format' when calling ConversionApi.put_convert_document_to_image"
      end
      # resource path
      local_var_path = "/html/{name}/convert/image/{outFormat}".sub('{' + 'name' + '}', name.to_s).sub('{' + 'outFormat' + '}', out_format.to_s)

      # query parameters
      query_params = {}
      query_params[:'outPath'] = out_path
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'resolution'] = opts[:'resolution'] if !opts[:'resolution'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: ConversionApi#put_convert_document_to_image\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Converts the HTML document (located on storage) to PDF and uploads resulting file to storage.
#
# @param name Document name.
# @param out_path Full resulting filename (ex. /folder1/folder2/result.pdf)
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @option opts [String] :folder The source document folder.
# @option opts [String] :storage The source and resulting document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def put_convert_document_to_pdf(name, out_path, opts = {})
      data, _status_code, _headers = put_convert_document_to_pdf_with_http_info(name, out_path, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Converts the HTML document (located on storage) to PDF and uploads resulting file to storage.
#
# @param name Document name.
# @param out_path Full resulting filename (ex. /folder1/folder2/result.pdf)
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @option opts [String] :folder The source document folder.
# @option opts [String] :storage The source and resulting document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def put_convert_document_to_pdf_with_http_info(name, out_path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: ConversionApi.put_convert_document_to_pdf ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling ConversionApi.put_convert_document_to_pdf"
      end
      # verify the required parameter 'out_path' is set
      if @api_client.config.client_side_validation && out_path.nil?
        fail ArgumentError, "Missing the required parameter 'out_path' when calling ConversionApi.put_convert_document_to_pdf"
      end
      # resource path
      local_var_path = "/html/{name}/convert/pdf".sub('{' + 'name' + '}', name.to_s)

      # query parameters
      query_params = {}
      query_params[:'outPath'] = out_path
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: ConversionApi#put_convert_document_to_pdf\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Converts the HTML document (located on storage) to XPS and uploads resulting file to storage.
#
# @param name Document name.
# @param out_path Full resulting filename (ex. /folder1/folder2/result.xps)
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @option opts [String] :folder The source document folder.
# @option opts [String] :storage The source and resulting document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def put_convert_document_to_xps(name, out_path, opts = {})
      data, _status_code, _headers = put_convert_document_to_xps_with_http_info(name, out_path, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Converts the HTML document (located on storage) to XPS and uploads resulting file to storage.
#
# @param name Document name.
# @param out_path Full resulting filename (ex. /folder1/folder2/result.xps)
# @param [Hash] opts the optional parameters
# @option opts [Integer] :width Resulting document page width in points (1/96 inch).
# @option opts [Integer] :height Resulting document page height in points (1/96 inch).
# @option opts [Integer] :left_margin Left resulting document page margin in points (1/96 inch).
# @option opts [Integer] :right_margin Right resulting document page margin in points (1/96 inch).
# @option opts [Integer] :top_margin Top resulting document page margin in points (1/96 inch).
# @option opts [Integer] :bottom_margin Bottom resulting document page margin in points (1/96 inch).
# @option opts [String] :folder The source document folder.
# @option opts [String] :storage The source and resulting document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def put_convert_document_to_xps_with_http_info(name, out_path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: ConversionApi.put_convert_document_to_xps ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling ConversionApi.put_convert_document_to_xps"
      end
      # verify the required parameter 'out_path' is set
      if @api_client.config.client_side_validation && out_path.nil?
        fail ArgumentError, "Missing the required parameter 'out_path' when calling ConversionApi.put_convert_document_to_xps"
      end
      # resource path
      local_var_path = "/html/{name}/convert/xps".sub('{' + 'name' + '}', name.to_s)

      # query parameters
      query_params = {}
      query_params[:'outPath'] = out_path
      query_params[:'width'] = opts[:'width'] if !opts[:'width'].nil?
      query_params[:'height'] = opts[:'height'] if !opts[:'height'].nil?
      query_params[:'leftMargin'] = opts[:'left_margin'] if !opts[:'left_margin'].nil?
      query_params[:'rightMargin'] = opts[:'right_margin'] if !opts[:'right_margin'].nil?
      query_params[:'topMargin'] = opts[:'top_margin'] if !opts[:'top_margin'].nil?
      query_params[:'bottomMargin'] = opts[:'bottom_margin'] if !opts[:'bottom_margin'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: ConversionApi#put_convert_document_to_xps\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end


################################################################################
#                             Document Api
################################################################################


# Return list of HTML fragments matching the specified XPath query.
#
# @param name The document name.
# @param x_path XPath query string.
# @param out_format Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
# @param [Hash] opts the optional parameters
# @option opts [String] :storage The document storage.
# @option opts [String] :folder The document folder.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_document_fragment_by_x_path(name, x_path, out_format, opts = {})
      data, _status_code, _headers = get_document_fragment_by_x_path_with_http_info(name, x_path, out_format, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Return list of HTML fragments matching the specified XPath query.
#
# @param name The document name.
# @param x_path XPath query string.
# @param out_format Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
# @param [Hash] opts the optional parameters
# @option opts [String] :storage The document storage.
# @option opts [String] :folder The document folder.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_document_fragment_by_x_path_with_http_info(name, x_path, out_format, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_document_fragment_by_x_path ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_document_fragment_by_x_path"
      end
      # verify the required parameter 'x_path' is set
      if @api_client.config.client_side_validation && x_path.nil?
        fail ArgumentError, "Missing the required parameter 'x_path' when calling HtmlApi.get_document_fragment_by_x_path"
      end
      # verify the required parameter 'out_format' is set
      if @api_client.config.client_side_validation && out_format.nil?
        fail ArgumentError, "Missing the required parameter 'out_format' when calling HtmlApi.get_document_fragment_by_x_path"
      end
      # resource path
      local_var_path = "/html/{name}/fragments/{outFormat}".sub('{' + 'name' + '}', name.to_s).sub('{' + 'outFormat' + '}', out_format.to_s)

      # query parameters
      query_params = {}
      query_params[:'xPath'] = x_path
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_document_fragment_by_x_path\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Return list of HTML fragments matching the specified XPath query by the source page URL.
#
# @param source_url Source page URL.
# @param x_path XPath query string.
# @param out_format Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_document_fragment_by_x_path_by_url(source_url, x_path, out_format)
      data, _status_code, _headers = get_document_fragment_by_x_path_by_url_with_http_info(source_url, x_path, out_format)
      return {file: data, status: _status_code, headers: _headers}
    end

# Return list of HTML fragments matching the specified XPath query by the source page URL.
#
# @param source_url Source page URL.
# @param x_path XPath query string.
# @param out_format Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_document_fragment_by_x_path_by_url_with_http_info(source_url, x_path, out_format)
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: DocumentApi.get_document_fragment_by_x_path_by_url ..."
      end
      # verify the required parameter 'source_url' is set
      if @api_client.config.client_side_validation && source_url.nil?
        fail ArgumentError, "Missing the required parameter 'source_url' when calling DocumentApi.get_document_fragment_by_x_path_by_url"
      end
      # verify the required parameter 'x_path' is set
      if @api_client.config.client_side_validation && x_path.nil?
        fail ArgumentError, "Missing the required parameter 'x_path' when calling DocumentApi.get_document_fragment_by_x_path_by_url"
      end
      # verify the required parameter 'out_format' is set
      if @api_client.config.client_side_validation && out_format.nil?
        fail ArgumentError, "Missing the required parameter 'out_format' when calling DocumentApi.get_document_fragment_by_x_path_by_url"
      end
      # resource path
      local_var_path = "/html/fragments/{outFormat}".sub('{' + 'outFormat' + '}', out_format.to_s)

      # query parameters
      query_params = {}
      query_params[:'sourceUrl'] = source_url
      query_params[:'xPath'] = x_path

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/zip'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: DocumentApi#get_document_fragment_by_x_path_by_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Return list of HTML fragments matching the specified CSS selector.
#
# @param name The document name.
# @param selector CSS selector string.
# @param out_format Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
# @param [Hash] opts the optional parameters
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_document_fragments_by_css_selector(name, selector, out_format, opts = {})
      data, _status_code, _headers = get_document_fragments_by_css_selector_with_http_info(name, selector, out_format, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Return list of HTML fragments matching the specified CSS selector.
#
# @param name The document name.
# @param selector CSS selector string.
# @param out_format Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
# @param [Hash] opts the optional parameters
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_document_fragments_by_css_selector_with_http_info(name, selector, out_format, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: DocumentApi.get_document_fragments_by_css_selector ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling DocumentApi.get_document_fragments_by_css_selector"
      end
      # verify the required parameter 'selector' is set
      if @api_client.config.client_side_validation && selector.nil?
        fail ArgumentError, "Missing the required parameter 'selector' when calling DocumentApi.get_document_fragments_by_css_selector"
      end
      # verify the required parameter 'out_format' is set
      if @api_client.config.client_side_validation && out_format.nil?
        fail ArgumentError, "Missing the required parameter 'out_format' when calling DocumentApi.get_document_fragments_by_css_selector"
      end
      # resource path
      local_var_path = "/html/{name}/fragments/css/{outFormat}".sub('{' + 'name' + '}', name.to_s).sub('{' + 'outFormat' + '}', out_format.to_s)

      # query parameters
      query_params = {}
      query_params[:'selector'] = selector
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: DocumentApi#get_document_fragments_by_css_selector\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Return list of HTML fragments matching the specified CSS selector by the source page URL.
#
# @param source_url Source page URL.
# @param selector CSS selector string.
# @param out_format Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
# @param [Hash] opts the optional parameters
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_document_fragments_by_css_selector_by_url(source_url, selector, out_format, opts = {})
      data, _status_code, _headers = get_document_fragments_by_css_selector_by_url_with_http_info(source_url, selector, out_format, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Return list of HTML fragments matching the specified CSS selector by the source page URL.
#
# @param source_url Source page URL.
# @param selector CSS selector string.
# @param out_format Output format. Possible values: &#39;plain&#39; and &#39;json&#39;.
# @param [Hash] opts the optional parameters
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_document_fragments_by_css_selector_by_url_with_http_info(source_url, selector, out_format, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: DocumentApi.get_document_fragments_by_css_selector_by_url ..."
      end
      # verify the required parameter 'source_url' is set
      if @api_client.config.client_side_validation && source_url.nil?
        fail ArgumentError, "Missing the required parameter 'source_url' when calling DocumentApi.get_document_fragments_by_css_selector_by_url"
      end
      # verify the required parameter 'selector' is set
      if @api_client.config.client_side_validation && selector.nil?
        fail ArgumentError, "Missing the required parameter 'selector' when calling DocumentApi.get_document_fragments_by_css_selector_by_url"
      end
      # verify the required parameter 'out_format' is set
      if @api_client.config.client_side_validation && out_format.nil?
        fail ArgumentError, "Missing the required parameter 'out_format' when calling DocumentApi.get_document_fragments_by_css_selector_by_url"
      end
      # resource path
      local_var_path = "/html/fragments/css/{outFormat}".sub('{' + 'outFormat' + '}', out_format.to_s)

      # query parameters
      query_params = {}
      query_params[:'sourceUrl'] = source_url
      query_params[:'selector'] = selector

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: DocumentApi#get_document_fragments_by_css_selector_by_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Return all HTML document images packaged as a ZIP archive.
#
# @param name The document name.
# @param [Hash] opts the optional parameters
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_document_images(name, opts = {})
      data, _status_code, _headers = get_document_images_with_http_info(name, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Return all HTML document images packaged as a ZIP archive.
#
# @param name The document name.
# @param [Hash] opts the optional parameters
# @option opts [String] :folder The document folder.
# @option opts [String] :storage The document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_document_images_with_http_info(name, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_document_images ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_document_images"
      end
      # resource path
      local_var_path = "/html/{name}/images/all".sub('{' + 'name' + '}', name.to_s)

      # query parameters
      query_params = {}
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/zip'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_document_images\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end


# Return all HTML page images packaged as a ZIP archive by the source page URL.
#
# @param source_url Source page URL.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_document_images_by_url(source_url)
      data, _status_code, _headers = get_document_images_by_url_with_http_info(source_url)
      return {file: data, status: _status_code, headers: _headers}
    end

# Return all HTML page images packaged as a ZIP archive by the source page URL.
#
# @param source_url Source page URL.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_document_images_by_url_with_http_info(source_url)
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: DocumentApi.get_document_images_by_url ..."
      end
      # verify the required parameter 'source_url' is set
      if @api_client.config.client_side_validation && source_url.nil?
        fail ArgumentError, "Missing the required parameter 'source_url' when calling DocumentApi.get_document_images_by_url"
      end
      # resource path
      local_var_path = "/html/images/all"

      # query parameters
      query_params = {}
      query_params[:'sourceUrl'] = source_url

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/zip'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: DocumentApi#get_document_images_by_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

################################################################################
#                             OCR Api
################################################################################


# Recognize text from the image file in the storage and import it to HTML format.
#
# @param name The image file name.
# @param [Hash] opts the optional parameters
# @option opts [String] :ocr_engine_lang OCR engine language - language  (default to en)
# @option opts [String] :folder The source image folder.
# @option opts [String] :storage The source image storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_recognize_and_import_to_html(name, opts = {})
      data, _status_code, _headers = get_recognize_and_import_to_html_with_http_info(name, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Recognize text from the image file in the storage and import it to HTML format.
#
# @param name The image file name.
# @param [Hash] opts the optional parameters
# @option opts [String] :ocr_engine_lang OCR engine language - language default "en"
# @option opts [String] :folder The source image folder.
# @option opts [String] :storage The source image storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_recognize_and_import_to_html_with_http_info(name, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_recognize_and_import_to_html ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_recognize_and_import_to_html"
      end
      # resource path
      local_var_path = "/html/{name}/ocr/import".sub('{' + 'name' + '}', name.to_s)

      # query parameters
      query_params = {}
      if opts[:'ocr_engine_lang'].nil?
        query_params[:'ocrEngineLang'] = "en"
      else
        query_params[:'ocrEngineLang'] = opts[:'ocr_engine_lang']
      end

      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_recognize_and_import_to_html\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Recognize text from the image file in the storage, import it to HTML format and translate to specified language.
#
# @param name The image file name.
# @param src_lang Source language - also supposed as the OCR engine language.
# @param res_lang Result language.
# @param [Hash] opts the optional parameters
# @option opts [String] :folder The source image folder.
# @option opts [String] :storage The source image storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_recognize_and_translate_to_html(name, src_lang, res_lang, opts = {})
      data, _status_code, _headers = get_recognize_and_translate_to_html_with_http_info(name, src_lang, res_lang, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Recognize text from the image file in the storage, import it to HTML format and translate to specified language.
#
# @param name The image file name.
# @param src_lang Source language - also supposed as the OCR engine language.
# @param res_lang Result language.
# @param [Hash] opts the optional parameters
# @option opts [String] :folder The source image folder.
# @option opts [String] :storage The source image storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_recognize_and_translate_to_html_with_http_info(name, src_lang, res_lang, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_recognize_and_translate_to_html ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_recognize_and_translate_to_html"
      end
      # verify the required parameter 'src_lang' is set
      if @api_client.config.client_side_validation && src_lang.nil?
        fail ArgumentError, "Missing the required parameter 'src_lang' when calling HtmlApi.get_recognize_and_translate_to_html"
      end
      # verify the required parameter 'res_lang' is set
      if @api_client.config.client_side_validation && res_lang.nil?
        fail ArgumentError, "Missing the required parameter 'res_lang' when calling HtmlApi.get_recognize_and_translate_to_html"
      end
      # resource path
      local_var_path = "/html/{name}/ocr/translate/{srcLang}/{resLang}"
          .sub('{' + 'name' + '}', name.to_s)
          .sub('{' + 'srcLang' + '}', src_lang.to_s)
          .sub('{' + 'resLang' + '}', res_lang.to_s)

      # query parameters
      query_params = {}
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_recognize_and_translate_to_html\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end


################################################################################
#                        Translation Api
################################################################################


# Translate the HTML document specified by the name from default or specified storage.
#
# @param name Document name.
# @param src_lang Source language.
# @param res_lang Result language.
# @param [Hash] opts the optional parameters
# @option opts [String] :storage The source document storage.
# @option opts [String] :folder The source document folder.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_translate_document(name, src_lang, res_lang, opts = {})
      data, _status_code, _headers = get_translate_document_with_http_info(name, src_lang, res_lang, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Translate the HTML document specified by the name from default or specified storage.
#
# @param name Document name.
# @param src_lang Source language.
# @param res_lang Result language.
# @param [Hash] opts the optional parameters
# @option opts [String] :storage The source document storage.
# @option opts [String] :folder The source document folder.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_translate_document_with_http_info(name, src_lang, res_lang, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_translate_document ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_translate_document"
      end
      # verify the required parameter 'src_lang' is set
      if @api_client.config.client_side_validation && src_lang.nil?
        fail ArgumentError, "Missing the required parameter 'src_lang' when calling HtmlApi.get_translate_document"
      end
      # verify the required parameter 'res_lang' is set
      if @api_client.config.client_side_validation && res_lang.nil?
        fail ArgumentError, "Missing the required parameter 'res_lang' when calling HtmlApi.get_translate_document"
      end
      # resource path
      local_var_path = "/html/{name}/translate/{srcLang}/{resLang}".sub('{' + 'name' + '}', name.to_s).sub('{' + 'srcLang' + '}', src_lang.to_s).sub('{' + 'resLang' + '}', res_lang.to_s)

      # query parameters
      query_params = {}
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_translate_document\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Translate the HTML document from Web specified by its URL.
#
# @param source_url Source document URL.
# @param src_lang Source language.
# @param res_lang Result language.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_translate_document_by_url(source_url, src_lang, res_lang)
      data, _status_code, _headers = get_translate_document_by_url_with_http_info(source_url, src_lang, res_lang)
      return {file: data, status: _status_code, headers: _headers}
    end

# Translate the HTML document from Web specified by its URL.
#
# @param source_url Source document URL.
# @param src_lang Source language.
# @param res_lang Result language.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_translate_document_by_url_with_http_info(source_url, src_lang, res_lang)
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_translate_document_by_url ..."
      end
      # verify the required parameter 'source_url' is set
      if @api_client.config.client_side_validation && source_url.nil?
        fail ArgumentError, "Missing the required parameter 'source_url' when calling HtmlApi.get_translate_document_by_url"
      end
      # verify the required parameter 'src_lang' is set
      if @api_client.config.client_side_validation && src_lang.nil?
        fail ArgumentError, "Missing the required parameter 'src_lang' when calling HtmlApi.get_translate_document_by_url"
      end
      # verify the required parameter 'res_lang' is set
      if @api_client.config.client_side_validation && res_lang.nil?
        fail ArgumentError, "Missing the required parameter 'res_lang' when calling HtmlApi.get_translate_document_by_url"
      end
      # resource path
      local_var_path = "/html/translate/{srcLang}/{resLang}".sub('{' + 'srcLang' + '}', src_lang.to_s).sub('{' + 'resLang' + '}', res_lang.to_s)

      # query parameters
      query_params = {}
      query_params[:'sourceUrl'] = source_url

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_translate_document_by_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end


################################################################################
#                        Summarization Api
################################################################################


# Get the HTML document keywords using the keyword detection service.
#
# @param name Document name.
# @param [Hash] opts the optional parameters
# @option opts [String] :folder Document folder.
# @option opts [String] :storage Document storage.
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_detect_html_keywords(name, opts = {})
      data, _status_code, _headers = get_detect_html_keywords_with_http_info(name, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Get the HTML document keywords using the keyword detection service.
#
# @param name Document name.
# @param [Hash] opts the optional parameters
# @option opts [String] :folder Document folder.
# @option opts [String] :storage Document storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_detect_html_keywords_with_http_info(name, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_detect_html_keywords ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling HtmlApi.get_detect_html_keywords"
      end
      # resource path
      local_var_path = "/html/{name}/summ/keywords".sub('{' + 'name' + '}', name.to_s)

      # query parameters
      query_params = {}
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_detect_html_keywords\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Get the keywords from HTML document from Web specified by its URL using the keyword detection service
#
# @param source_url Source document URL.
# @param [Hash] opts the optional parameters
# @return [Hash] {file: data, status: _status_code, headers: _headers}
    def get_detect_html_keywords_by_url(source_url, opts = {})
      data, _status_code, _headers = get_detect_html_keywords_by_url_with_http_info(source_url, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Get the keywords from HTML document from Web specified by its URL using the keyword detection service
#
# @param source_url Source document URL.
# @param [Hash] opts the optional parameters
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_detect_html_keywords_by_url_with_http_info(source_url, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: HtmlApi.get_detect_html_keywords_by_url ..."
      end
      # verify the required parameter 'source_url' is set
      if @api_client.config.client_side_validation && source_url.nil?
        fail ArgumentError, "Missing the required parameter 'source_url' when calling HtmlApi.get_detect_html_keywords_by_url"
      end
      # resource path
      local_var_path = "/html/summ/keywords"

      # query parameters
      query_params = {}
      query_params[:'sourceUrl'] = source_url

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: HtmlApi#get_detect_html_keywords_by_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Populate HTML document template with data located as a file in the storage.
#
# @param template_name Template document name. Template document is HTML or zipped HTML.
# @param data_path Data source file path in the storage. Supported data format: XML
# @param [Hash] opts the optional parameters
# @option opts [String] :options Template merge options: reserved for further implementation.
# @option opts [String] :folder The template document folder.
# @option opts [String] :storage The template document and data source storage.
# @return [File]
    def get_merge_html_template(template_name, data_path, opts = {})
      data, _status_code, _headers = get_merge_html_template_with_http_info(template_name, data_path, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Populate HTML document template with data located as a file in the storage.
#
# @param template_name Template document name. Template document is HTML or zipped HTML.
# @param data_path Data source file path in the storage. Supported data format: XML
# @param [Hash] opts the optional parameters
# @option opts [String] :options Template merge options: reserved for further implementation.
# @option opts [String] :folder The template document folder.
# @option opts [String] :storage The template document and data source storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_merge_html_template_with_http_info(template_name, data_path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: TemplateMergeApi.get_merge_html_template ..."
      end
      # verify the required parameter 'template_name' is set
      if @api_client.config.client_side_validation && template_name.nil?
        fail ArgumentError, "Missing the required parameter 'template_name' when calling TemplateMergeApi.get_merge_html_template"
      end
      # verify the required parameter 'data_path' is set
      if @api_client.config.client_side_validation && data_path.nil?
        fail ArgumentError, "Missing the required parameter 'data_path' when calling TemplateMergeApi.get_merge_html_template"
      end
      # resource path
      local_var_path = "/html/{templateName}/merge".sub('{' + 'templateName' + '}', template_name.to_s)

      # query parameters
      query_params = {}
      query_params[:'dataPath'] = data_path
      query_params[:'options'] = opts[:'options'] if !opts[:'options'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['multipart/form-data'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: TemplateMergeApi#get_merge_html_template\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Populate HTML document template with data from the request body. Result document will be saved to storage.
#
# @param template_name Template document name. Template document is HTML or zipped HTML.
# @param out_path Result document path.
# @param file A data file to populate template.
# @param [Hash] opts the optional parameters
# @option opts [String] :options Template merge options: reserved for further implementation.
# @option opts [String] :folder The template document folder.
# @option opts [String] :storage The template document and data source storage.
# @return [File]
    def put_merge_html_template(template_name, out_path, file, opts = {})
      data, _status_code, _headers = put_merge_html_template_with_http_info(template_name, out_path, file, opts)
      return {file: data, status: _status_code, headers: _headers}
    end

# Populate HTML document template with data from the request body. Result document will be saved to storage.
#
# @param template_name Template document name. Template document is HTML or zipped HTML.
# @param out_path Result document path.
# @param file A data file to populate template.
# @param [Hash] opts the optional parameters
# @option opts [String] :options Template merge options: reserved for further implementation.
# @option opts [String] :folder The template document folder.
# @option opts [String] :storage The template document and data source storage.
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def put_merge_html_template_with_http_info(template_name, out_path, file, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: TemplateMergeApi.put_merge_html_template ..."
      end
      # verify the required parameter 'template_name' is set
      if @api_client.config.client_side_validation && template_name.nil?
        fail ArgumentError, "Missing the required parameter 'template_name' when calling TemplateMergeApi.put_merge_html_template"
      end
      # verify the required parameter 'out_path' is set
      if @api_client.config.client_side_validation && out_path.nil?
        fail ArgumentError, "Missing the required parameter 'out_path' when calling TemplateMergeApi.put_merge_html_template"
      end
      # verify the required parameter 'file' is set
      if @api_client.config.client_side_validation && file.nil?
        fail ArgumentError, "Missing the required parameter 'file' when calling TemplateMergeApi.put_merge_html_template"
      end
      # resource path
      local_var_path = "/html/{templateName}/merge".sub('{' + 'templateName' + '}', template_name.to_s)

      # query parameters
      query_params = {}
      query_params[:'outPath'] = out_path
      query_params[:'options'] = opts[:'options'] if !opts[:'options'].nil?
      query_params[:'folder'] = opts[:'folder'] if !opts[:'folder'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/octet-stream'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = ::File.open(file,"rb").read
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'File')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: TemplateMergeApi#put_merge_html_template\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
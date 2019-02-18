# -*- coding: utf-8 -*-
=begin
  --------------------------------------------------------------------------------------------------------------------
  <copyright company="Aspose" file="storage_api.rb">
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
  class StorageApi
    attr_accessor :api_client

    def initialize(args)
      @api_client = AsposeHtml::ApiClient.default(args)
    end


################################################################################
#                             Storage Api
################################################################################


    # Check the disk usage of the current account
    # 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :storage User&#39;s storage name
    # @return [DiscUsageResponse]
    def get_disc_usage(opts = {})
      data, _status_code, _headers = get_disc_usage_with_http_info(opts)
      data
    end

    # Check the disk usage of the current account 
    # 
    # @param [Hash] opts the optional parameters
    # @option opts [String] :storage User&#39;s storage name
    # @return [Array<(DiscUsageResponse, Fixnum, Hash)>] DiscUsageResponse data, response status code and response headers
    def get_disc_usage_with_http_info(opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: StorageApi.get_disc_usage ..."
      end
      # resource path
      local_var_path = "/storage/disc"

      # query parameters
      query_params = {}
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
        :return_type => 'DiscUsageResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: StorageApi#get_disc_usage\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Check if a specific file or folder exists
    # 
    # @param path File or folder path e.g. /file.ext or /Folder1
    # @param [Hash] opts the optional parameters
    # @option opts [String] :version_id File&#39;s version
    # @option opts [String] :storage User&#39;s storage name
    # @return [FileExistResponse]
    def get_is_exist(path, opts = {})
      data, _status_code, _headers = get_is_exist_with_http_info(path, opts)
      data
    end

    # Check if a specific file or folder exists
    # 
    # @param path File or folder path e.g. /file.ext or /Folder1
    # @param [Hash] opts the optional parameters
    # @option opts [String] :version_id File&#39;s version
    # @option opts [String] :storage User&#39;s storage name
    # @return [Array<(FileExistResponse, Fixnum, Hash)>] FileExistResponse data, response status code and response headers
    def get_is_exist_with_http_info(path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: StorageApi.get_is_exist ..."
      end
      # verify the required parameter 'path' is set
      if @api_client.config.client_side_validation && path.nil?
        fail ArgumentError, "Missing the required parameter 'path' when calling StorageApi.get_is_exist"
      end
      # resource path
      local_var_path = "/storage/exist"

      # query parameters
      query_params = {}
      query_params[:'path'] = path
      query_params[:'versionId'] = opts[:'version_id'] if !opts[:'version_id'].nil?
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
        :return_type => 'FileExistResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: StorageApi#get_is_exist\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Check if storage exists 
    # 
    # @param name Storage name
    # @return [StorageExistResponse]
    def get_is_storage_exist(name)
      data, _status_code, _headers = get_is_storage_exist_with_http_info(name)
      data
    end

    # Check if storage exists 
    # 
    # @param name Storage name
    # @return [Array<(StorageExistResponse, Fixnum, Hash)>] StorageExistResponse data, response status code and response headers
    def get_is_storage_exist_with_http_info(name)
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: StorageApi.get_is_storage_exist ..."
      end
      # verify the required parameter 'name' is set
      if @api_client.config.client_side_validation && name.nil?
        fail ArgumentError, "Missing the required parameter 'name' when calling StorageApi.get_is_storage_exist"
      end
      # resource path
      local_var_path = "/storage/{name}/exist".sub('{' + 'name' + '}', name.to_s)

      # query parameters
      query_params = {}

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
        :return_type => 'StorageExistResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: StorageApi#get_is_storage_exist\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Get the file's versions list 
    # 
    # @param path File path e.g. /file.ext or /Folder1/file.ext
    # @param [Hash] opts the optional parameters
    # @option opts [String] :storage User&#39;s storage name
    # @return [FileVersionsResponse]
    def get_list_file_versions(path, opts = {})
      data, _status_code, _headers = get_list_file_versions_with_http_info(path, opts)
      data
    end

    # Get the file&#39;s versions list 
    # 
    # @param path File path e.g. /file.ext or /Folder1/file.ext
    # @param [Hash] opts the optional parameters
    # @option opts [String] :storage User&#39;s storage name
    # @return [Array<(FileVersionsResponse, Fixnum, Hash)>] FileVersionsResponse data, response status code and response headers
    def get_list_file_versions_with_http_info(path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: StorageApi.get_list_file_versions ..."
      end
      # verify the required parameter 'path' is set
      if @api_client.config.client_side_validation && path.nil?
        fail ArgumentError, "Missing the required parameter 'path' when calling StorageApi.get_list_file_versions"
      end
      # resource path
      local_var_path = "/storage/version"

      # query parameters
      query_params = {}
      query_params[:'path'] = path
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
        :return_type => 'FileVersionsResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: StorageApi#get_list_file_versions\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end


################################################################################
#                           File Api
################################################################################


# Remove a specific file
#
# @param path Path of the file including file name and extension e.g. /Folder1/file.ext
# @param [Hash] opts the optional parameters
# @option opts [String] :version_id File&#39;s version
# @option opts [String] :storage User&#39;s storage name
# @return [RemoveFileResponse]
    def delete_file(path, opts = {})
      data, _status_code, _headers = delete_file_with_http_info(path, opts)
      data
    end

# Remove a specific file
#
# @param path Path of the file including file name and extension e.g. /Folder1/file.ext
# @param [Hash] opts the optional parameters
# @option opts [String] :version_id File&#39;s version
# @option opts [String] :storage User&#39;s storage name
# @return [Array<(RemoveFileResponse, Fixnum, Hash)>] RemoveFileResponse data, response status code and response headers
    def delete_file_with_http_info(path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: FileApi.delete_file ..."
      end
      # verify the required parameter 'path' is set
      if @api_client.config.client_side_validation && path.nil?
        fail ArgumentError, "Missing the required parameter 'path' when calling FileApi.delete_file"
      end
      # resource path
      local_var_path = "/storage/file"

      # query parameters
      query_params = {}
      query_params[:'path'] = path
      query_params[:'versionId'] = opts[:'version_id'] if !opts[:'version_id'].nil?
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
      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'RemoveFileResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: FileApi#delete_file\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Download a specific file
#
# @param path Path of the file including the file name and extension e.g. /file.ext
# @param [Hash] opts the optional parameters
# @option opts [String] :version_id File&#39;s version
# @option opts [String] :storage User&#39;s storage name
# @return [File]
    def get_download(path, opts = {})
      data, _status_code, _headers = get_download_with_http_info(path, opts)
      status = _status_code == 200 ? "OK" : "Error"
      {file: data, code: _status_code, status: status}
    end

# Download a specific file
#
# @param path Path of the file including the file name and extension e.g. /file.ext
# @param [Hash] opts the optional parameters
# @option opts [String] :version_id File&#39;s version
# @option opts [String] :storage User&#39;s storage name
# @return [Array<(File, Fixnum, Hash)>] File data, response status code and response headers
    def get_download_with_http_info(path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: FileApi.get_download ..."
      end
      # verify the required parameter 'path' is set
      if @api_client.config.client_side_validation && path.nil?
        fail ArgumentError, "Missing the required parameter 'path' when calling FileApi.get_download"
      end
      # resource path
      local_var_path = "/storage/file"

      # query parameters
      query_params = {}
      query_params[:'path'] = path
      query_params[:'versionId'] = opts[:'version_id'] if !opts[:'version_id'].nil?
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
        @api_client.config.logger.debug "API called: FileApi#get_download\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Move a specific file
#
# @param src Source file path e.g. /fileSource.ext
# @param dest Destination file path e.g. /fileDestination.ext
# @param [Hash] opts the optional parameters
# @option opts [String] :version_id Source file&#39;s version,
# @option opts [String] :storage User&#39;s source storage name
# @option opts [String] :dest_storage User&#39;s destination storage name
# @return [MoveFileResponse]
    def post_move_file(src, dest, opts = {})
      data, _status_code, _headers = post_move_file_with_http_info(src, dest, opts)
      data
    end

# Move a specific file
#
# @param src Source file path e.g. /fileSource.ext
# @param dest Destination file path e.g. /fileDestination.ext
# @param [Hash] opts the optional parameters
# @option opts [String] :version_id Source file&#39;s version,
# @option opts [String] :storage User&#39;s source storage name
# @option opts [String] :dest_storage User&#39;s destination storage name
# @return [Array<(MoveFileResponse, Fixnum, Hash)>] MoveFileResponse data, response status code and response headers
    def post_move_file_with_http_info(src, dest, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: FileApi.post_move_file ..."
      end
      # verify the required parameter 'src' is set
      if @api_client.config.client_side_validation && src.nil?
        fail ArgumentError, "Missing the required parameter 'src' when calling FileApi.post_move_file"
      end
      # verify the required parameter 'dest' is set
      if @api_client.config.client_side_validation && dest.nil?
        fail ArgumentError, "Missing the required parameter 'dest' when calling FileApi.post_move_file"
      end
      # resource path
      local_var_path = "/storage/file"

      # query parameters
      query_params = {}
      query_params[:'src'] = src
      query_params[:'dest'] = dest
      query_params[:'versionId'] = opts[:'version_id'] if !opts[:'version_id'].nil?
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?
      query_params[:'destStorage'] = opts[:'dest_storage'] if !opts[:'dest_storage'].nil?

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['multipart/form-data'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'MoveFileResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: FileApi#post_move_file\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Upload a specific file
#
# @param path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext
# @param file File to upload
# @param [Hash] opts the optional parameters
# @option opts [String] :version_id Source file&#39;s version
# @option opts [String] :storage User&#39;s storage name
# @return [MessageResponse]
    def put_create(path, file, opts = {})
      data, _status_code, _headers = put_create_with_http_info(path, file, opts)
      data
    end

# Upload a specific file
#
# @param path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext
# @param file File to upload
# @param [Hash] opts the optional parameters
# @option opts [String] :version_id Source file&#39;s version
# @option opts [String] :storage User&#39;s storage name
# @return [Array<(MessageResponse, Fixnum, Hash)>] MessageResponse, response status code and response headers
    def put_create_with_http_info(path, file, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: FileApi.put_create ..."
      end
      # verify the required parameter 'path' is set
      if @api_client.config.client_side_validation && path.nil?
        fail ArgumentError, "Missing the required parameter 'path' when calling FileApi.put_create"
      end
      # verify the required parameter 'file' is set
      if @api_client.config.client_side_validation && file.nil?
        fail ArgumentError, "Missing the required parameter 'file' when calling FileApi.put_create"
      end
      # resource path
      local_var_path = "/storage/file"

      # query parameters
      query_params = {}
      query_params[:'path'] = path
      query_params[:'versionId'] = opts[:'version_id'] if !opts[:'version_id'].nil?
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
                                                        :return_type => 'MessageResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: FileApi#put_create\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end


################################################################################
#                           Folder Api
################################################################################


# Remove a specific folder
#
# @param path Folder path e.g. /Folder1
# @param [Hash] opts the optional parameters
# @option opts [String] :storage User&#39;s storage name
# @option opts [BOOLEAN] :recursive Remove recursivelly inner folder/files. If false and folder contains data than exception is raised. (default to false)
# @return [RemoveFolderResponse]
    def delete_folder(path, opts = {})
      data, _status_code, _headers = delete_folder_with_http_info(path, opts)
      data
    end

# Remove a specific folder
#
# @param path Folder path e.g. /Folder1
# @param [Hash] opts the optional parameters
# @option opts [String] :storage User&#39;s storage name
# @option opts [BOOLEAN] :recursive Remove recursivelly inner folder/files. If false and folder contains data than exception is raised.
# @return [Array<(RemoveFolderResponse, Fixnum, Hash)>] RemoveFolderResponse data, response status code and response headers
    def delete_folder_with_http_info(path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: FolderApi.delete_folder ..."
      end
      # verify the required parameter 'path' is set
      if @api_client.config.client_side_validation && path.nil?
        fail ArgumentError, "Missing the required parameter 'path' when calling FolderApi.delete_folder"
      end
      # resource path
      local_var_path = "/storage/folder"

      # query parameters
      query_params = {}
      query_params[:'path'] = path
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?
      query_params[:'recursive'] = opts[:'recursive'] if !opts[:'recursive'].nil?

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
      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'RemoveFolderResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: FolderApi#delete_folder\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Get the file listing of a specific folder
#
# @param [Hash] opts the optional parameters
# @option opts [String] :path Start with name of storage e.g. root folder &#39;/&#39;or some folder &#39;/folder1/..&#39; (default to /)
# @option opts [String] :storage User&#39;s storage name
# @return [FileDetailsResponse]
    def get_list_files(opts = {})
      data, _status_code, _headers = get_list_files_with_http_info(opts)
      data
    end

# Get the file listing of a specific folder
#
# @param [Hash] opts the optional parameters
# @option opts [String] :path Start with name of storage e.g. root folder &#39;/&#39;or some folder &#39;/folder1/..&#39;
# @option opts [String] :storage User&#39;s storage name
# @return [Array<(FileDetailsResponse, Fixnum, Hash)>] File data, response status code and response headers
    def get_list_files_with_http_info(opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: FolderApi.get_list_files ..."
      end
      # resource path
      local_var_path = "/storage/folder"

      # query parameters
      query_params = {}
      query_params[:'path'] = opts[:'path'] if !opts[:'path'].nil?
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
                                                        :return_type => 'FileDetailsResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: FolderApi#get_list_files\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Move a specific folder
#
# @param src Source folder path e.g. /Folder1
# @param dest Destination folder path e.g. /Folder2
# @param [Hash] opts the optional parameters
# @option opts [String] :storage User&#39;s source storage name
# @option opts [String] :dest_storage User&#39;s destination storage name
# @return [MoveFolderResponse]
    def post_move_folder(src, dest, opts = {})
      data, _status_code, _headers = post_move_folder_with_http_info(src, dest, opts)
      data
    end

# Move a specific folder
#
# @param src Source folder path e.g. /Folder1
# @param dest Destination folder path e.g. /Folder2
# @param [Hash] opts the optional parameters
# @option opts [String] :storage User&#39;s source storage name
# @option opts [String] :dest_storage User&#39;s destination storage name
# @return [Array<(MoveFolderResponse, Fixnum, Hash)>] MoveFolderResponse data, response status code and response headers
    def post_move_folder_with_http_info(src, dest, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: FolderApi.post_move_folder ..."
      end
      # verify the required parameter 'src' is set
      if @api_client.config.client_side_validation && src.nil?
        fail ArgumentError, "Missing the required parameter 'src' when calling FolderApi.post_move_folder"
      end
      # verify the required parameter 'dest' is set
      if @api_client.config.client_side_validation && dest.nil?
        fail ArgumentError, "Missing the required parameter 'dest' when calling FolderApi.post_move_folder"
      end
      # resource path
      local_var_path = "/storage/folder"

      # query parameters
      query_params = {}
      query_params[:'src'] = src
      query_params[:'dest'] = dest
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?
      query_params[:'destStorage'] = opts[:'dest_storage'] if !opts[:'dest_storage'].nil?

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
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
                                                        :header_params => header_params,
                                                        :query_params => query_params,
                                                        :form_params => form_params,
                                                        :body => post_body,
                                                        :return_type => 'MoveFolderResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: FolderApi#post_move_folder\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

# Create the folder
#
# @param path [String] Target folder path e.g. Folder1/Folder2/. The folders will be created recursively
# @param [Hash] opts the optional parameters
# @option opts [String] :storage User&#39;s source storage name
# @option opts [String] :dest_storage User&#39;s destination storage name
# @return [MessageResponse]
    def put_create_folder(path, opts = {})
      data, _status_code, _headers = put_create_folder_with_http_info(path, opts)
      data
    end

# Create the folder
#
# @param path Target folder&#39;s path e.g. Folder1/Folder2/. The folders will be created recursively
# @param [Hash] opts the optional parameters
# @option opts [String] :storage User&#39;s source storage name
# @option opts [String] :dest_storage User&#39;s destination storage name
# @return [Array<(MessageResponse, Fixnum, Hash)>] MessageResponse, response status code and response headers
    def put_create_folder_with_http_info(path, opts = {})
      if @api_client.config.debug
        @api_client.config.logger.debug "Calling API: FolderApi.put_create_folder ..."
      end
      # verify the required parameter 'path' is set
      if @api_client.config.client_side_validation && path.nil?
        fail ArgumentError, "Missing the required parameter 'path' when calling FolderApi.put_create_folder"
      end
      # resource path
      local_var_path = "/storage/folder"

      # query parameters
      query_params = {}
      query_params[:'path'] = path
      query_params[:'storage'] = opts[:'storage'] if !opts[:'storage'].nil?
      query_params[:'destStorage'] = opts[:'dest_storage'] if !opts[:'dest_storage'].nil?

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
                                                        :return_type => 'MessageResponse')
      if @api_client.config.debug
        @api_client.config.logger.debug "API called: FolderApi#put_create_folder\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

  end
end

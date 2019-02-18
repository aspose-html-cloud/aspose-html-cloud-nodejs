# -*- coding: utf-8 -*-
=begin
  --------------------------------------------------------------------------------------------------------------------
  <copyright company="Aspose" file="storage_api_spec.rb">
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

require 'spec_helper'
require 'json'

describe 'Test Storage API' do
  before(:all) do
    # run before all tests
    @api = AsposeHtml::StorageApi.new CONFIG
  end

  describe 'test an instance of StorageApi' do
    it 'should create an instance of StorageApi' do
      expect(@api).to be_instance_of(AsposeHtml::StorageApi)
    end
  end

  #################################################
  #            Storage API
  #################################################

  # unit tests for get_disc_usage
  # Check the disk usage of the current account
  #
  # @param [Hash] opts the optional parameters
  # @option opts [String] :storage User&#39;s storage name
  # @return [DiscUsageResponse]
  describe 'get_disc_usage test' do
    it "must be {Code: 200, Status:'OK', DiscUsage:{UsedSize: num, TotalSize: num}}" do
      opts = {storage: nil}

      res = @api.get_disc_usage(opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res).to be_an_instance_of AsposeHtml::DiscUsageResponse
      expect(res.code).to be_an_instance_of Integer
      expect(res.status).to be_an_instance_of String
      expect(res.disc_usage).to be_an_instance_of AsposeHtml::DiscUsage
      expect(res.disc_usage.used_size).to be_an_instance_of Integer
      expect(res.disc_usage.total_size).to be_an_instance_of Integer
    end
  end

  # unit tests for get_is_exist
  # Check if a specific file or folder exists
  #
  # @param path File or folder path e.g. /file.ext or /Folder1
  # @param [Hash] opts the optional parameters
  # @option opts [String] :version_id File&#39;s version
  # @option opts [String] :storage User&#39;s storage name
  # @return [FileExistResponse]
  describe 'get_is_exist test' do
    it "must be {Code: 200, Status:'OK', FileExist:{IsExist: true, IsFolder: false}}" do

      name = "test3.html.zip"

      # Upload file to server
      res = upload_file(name)
      expect(res.code).to eql(200)

      path = "HtmlTestDoc/" + name
      opts = {storage: nil, version_id: nil}

      res = @api.get_is_exist(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res).to be_an_instance_of AsposeHtml::FileExistResponse
      expect(res.code).to be_an_instance_of Integer
      expect(res.status).to be_an_instance_of String
      expect(res.file_exist).to be_an_instance_of AsposeHtml::FileExist
      expect(res.file_exist.is_exist).to be true
      expect(res.file_exist.is_folder).to be false
    end

    it "must be {Code: 200, Status:'OK', FileExist:{IsExist: false, IsFolder: false}}" do

      path = "/non_exist_file.ext"
      opts = {storage: nil, version_id: nil}

      res = @api.get_is_exist(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res).to be_an_instance_of AsposeHtml::FileExistResponse
      expect(res.code).to be_an_instance_of Integer
      expect(res.status).to be_an_instance_of String
      expect(res.file_exist).to be_an_instance_of AsposeHtml::FileExist
      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false
    end
 end

  # unit tests for get_is_storage_exist
  # Check if storage exists
  #
  # @param name Storage name
  # @return [StorageExistResponse]
  describe 'get_is_storage_exist test' do
    it "must be {'Code': 200, 'Status': 'OK', 'IsExist':false}" do

      res = @api.get_is_storage_exist('non_exist_storage')

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res).to be_an_instance_of AsposeHtml::StorageExistResponse
      expect(res.code).to be_an_instance_of Integer
      expect(res.status).to be_an_instance_of String
      expect(res.is_exist).to be false
    end
  end

  # unit tests for get_list_file_versions
  # Get the file&#39;s versions list
  #
  # @param path File path e.g. /file.ext or /Folder1/file.ext
  # @param [Hash] opts the optional parameters
  # @option opts [String] :storage User&#39;s storage name
  # @return [FileVersionsResponse]
  describe 'get_list_file_versions test' do
    it "must be {'Code': 200, 'Status': 'OK', 'FileVertsions':[...]}" do

      name = "test1.html"

      # Upload files to server
      res = upload_file(name)
      expect(res.code).to eql(200)

      res = upload_file(name)
      expect(res.code).to eql(200)

      res = upload_file(name)
      expect(res.code).to eql(200)

      path = "HtmlTestDoc/" + name
      opts = {storage: nil}

      res = @api.get_list_file_versions(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res).to be_an_instance_of AsposeHtml::FileVersionsResponse
      expect(res.code).to be_an_instance_of Integer
      expect(res.status).to be_an_instance_of String
      expect(res.file_versions).to be_an_instance_of Array
      expect(res.file_versions[0]).to be_an_instance_of AsposeHtml::FileVersion
    end
  end

  #################################################
  #            File API
  #################################################

  # unit tests for delete_file
  # Remove a specific file
  #
  # @param path Path of the file including file name and extension e.g. /Folder1/file.ext
  # @param [Hash] opts the optional parameters
  # @option opts [String] :version_id File&#39;s version
  # @option opts [String] :storage User&#39;s storage name
  # @return [RemoveFileResponse]
  describe 'delete_file test' do
    it "must be {'Code': 200, 'Status': 'OK'}" do
      name = "test_for_delete.html"

      # Upload files to server
      res = upload_file(name)
      expect(res.code).to eql(200)

      path = "HtmlTestDoc/" + name
      opts = {storage: nil, version_id: nil}

      res = @api.delete_file(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check result
      res = @api.get_is_exist(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false
    end
  end

  # unit tests for get_download
  # Download a specific file
  #
  # @param path Path of the file including the file name and extension e.g. /file.ext
  # @param [Hash] opts the optional parameters
  # @option opts [String] :version_id File&#39;s version
  # @option opts [String] :storage User&#39;s storage name
  # @return {file: path_to_tmp_file, code: 200, status: 'OK'}
  describe 'get_download test' do
    it "must be {file: path_to_tmp_file, code: 200, status: 'OK'}" do
      name = "test_download.jpg"

      # Upload files to server
      res = upload_file(name)
      expect(res.code).to eql(200)

      path = "HtmlTestDoc/" + name
      opts = {storage: nil, version_id: nil}

      size_src = get_file_size(name)

      res = @api.get_download(path, opts)

      expect(res[:code]).to eql(200)
      expect(res[:status]).to eql("OK")
      expect(res[:file]).to be_an_instance_of File

      expect(File.size(res[:file].to_path)).to eql size_src

      #Move to test folder
      save_to_test_dir(res, name)
    end
  end

  # unit tests for post_move_file
  # Move a specific file
  #
  # @param src Source file path e.g. /fileSource.ext
  # @param dest Destination file path e.g. /fileDestination.ext
  # @param [Hash] opts the optional parameters
  # @option opts [String] :version_id Source file&#39;s version,
  # @option opts [String] :storage User&#39;s source storage name
  # @option opts [String] :dest_storage User&#39;s destination storage name
  # @return [MoveFileResponse]
  describe 'post_move_file test' do
    it "must be {'Code': 200, 'Status': 'OK'}" do
      name = "test_for_move.html"

      # Upload files to server
      res = upload_file(name)
      expect(res.code).to eql(200)

      src = "HtmlTestDoc/" + name
      dest = "HtmlTestDoc/test_moved.html"

      opts = {storage: nil, dest_storage: nil, version_id: nil}

      res = @api.post_move_file(src, dest, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check result destination
      res = @api.get_is_exist(dest)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be true
      expect(res.file_exist.is_folder).to be false

      # Check result source
      res = @api.get_is_exist(src)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false
    end
  end

  # unit tests for put_create
  # Upload a specific file
  #
  # @param path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext
  # @param file File to upload
  # @param [Hash] opts the optional parameters
  # @option opts [String] :version_id Source file&#39;s version
  # @option opts [String] :storage User&#39;s storage name
  # @return [MessageResponse]
  describe 'put_create test' do
    it "must be {'Code': 200, 'Status': 'OK'}" do
      name = "test_put_create.html"

      path = "HtmlTestDoc/" + name
      file = File.realpath(__dir__ + '/../../testdata/' + name)

      opts = {storage: nil, version_id: nil}

      # Check before
      res = @api.get_is_exist(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false

      res = @api.put_create(path, file, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check after
      res = @api.get_is_exist(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be true
      expect(res.file_exist.is_folder).to be false

      # clear
      res = @api.delete_file(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check after clear
      res = @api.get_is_exist(path, opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false
    end
  end

  #################################################
  #            Folder API
  #################################################

  # unit tests for put_create_folder
  # Create the folder
  #
  # @param path Target folder&#39;s path e.g. Folder1/Folder2/. The folders will be created recursively
  # @param [Hash] opts the optional parameters
  # @option opts [String] :storage User&#39;s source storage name
  # @option opts [String] :dest_storage User&#39;s destination storage name
  # @return [MessageResponse]
  describe 'put_create_folder test' do
    it "must be {'Code': 200, 'Status': 'OK'}" do

      path = "HtmlTestDoc/testFolder1/testFolder2/testFolder3"

      opts_exist = {storage: nil, version_id: nil}

      # Check before
      res = @api.get_is_exist(path, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false

      opts_folder = {storage: nil, dest_storage: nil}

      res = @api.put_create_folder(path, opts_folder)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check after
      res = @api.get_is_exist(path, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be true
      expect(res.file_exist.is_folder).to be true

      # clear
      path = "HtmlTestDoc/testFolder1"
      opts_delete = {storage: nil, recursive: true}

      res = @api.delete_folder(path, opts_delete)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check after clear
      res = @api.get_is_exist(path, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false
    end
  end

  # unit tests for delete_folder
  # Remove a specific folder
  #
  # @param path Folder path e.g. /Folder1
  # @param [Hash] opts the optional parameters
  # @option opts [String] :storage User&#39;s storage name
  # @option opts [BOOLEAN] :recursive Remove recursivelly inner folder/files. If false and folder contains data than exception is raised.
  # @return [RemoveFolderResponse]
  describe 'delete_folder test' do
    it "must be {'Code': 200, 'Status': 'OK'}" do

      path = "HtmlTestDoc/testFolder1/testFolder2/testFolder3"

      opts_exist = {storage: nil, version_id: nil}

      # Check before
      res = @api.get_is_exist(path, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false

      opts_folder = {storage: nil, dest_storage: nil}

      res = @api.put_create_folder(path, opts_folder)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check after
      res = @api.get_is_exist(path, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be true
      expect(res.file_exist.is_folder).to be true

      # Test delete folder
      path = "HtmlTestDoc/testFolder1"
      opts_delete = {storage: nil, recursive: true}

      res = @api.delete_folder(path, opts_delete)

      expect(res).to be_instance_of(AsposeHtml::RemoveFolderResponse)
      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check after clear
      res = @api.get_is_exist(path, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false
    end
  end

  # unit tests for post_move_folder
  # Move a specific folder
  #
  # @param src Source folder path e.g. /Folder1
  # @param dest Destination folder path e.g. /Folder2
  # @param [Hash] opts the optional parameters
  # @option opts [String] :storage User&#39;s source storage name
  # @option opts [String] :dest_storage User&#39;s destination storage name
  # @return [MoveFolderResponse]
  describe 'post_move_folder test' do
    it "must be {'Code': 200, 'Status': 'OK'}" do

      src = "HtmlTestDoc/testSourceFolder"
      opts_exist = {storage: nil, version_id: nil}

      # Check before
      res = @api.get_is_exist(src, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false

      opts_folder = {storage: nil, dest_storage: nil}

      # Create test folder
      res = @api.put_create_folder(src, opts_folder)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check after
      res = @api.get_is_exist(src, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be true
      expect(res.file_exist.is_folder).to be true

      # Test move folder
      dst = "HtmlTestDoc/MovedFolder"
      opts_move = {storage: nil, dest_storage: nil}

      res = @api.post_move_folder(src, dst, opts_move)

      expect(res).to be_instance_of(AsposeHtml::MoveFolderResponse)
      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check src after move
      res = @api.get_is_exist(src, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false

      # Check dst after move
      res = @api.get_is_exist(dst, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be true
      expect(res.file_exist.is_folder).to be true

      # Clear test folder
      opts_delete = {storage: nil, recursive: true}
      res = @api.delete_folder(dst, opts_delete)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      # Check after clear
      res = @api.get_is_exist(dst, opts_exist)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res.file_exist.is_exist).to be false
      expect(res.file_exist.is_folder).to be false
    end
  end

  # unit tests for get_list_files
  # Get the file listing of a specific folder
  #
  # @param [Hash] opts the optional parameters
  # @option opts [String] :path Start with name of storage e.g. root folder &#39;/&#39;or some folder &#39;/folder1/..&#39;
  # @option opts [String] :storage User&#39;s storage name
  # @return [FileDetailsResponse]
  describe 'get_list_files test' do
    it "should work" do
      opts = {path: '/', storage: nil}

      res = @api.get_list_files(opts)

      expect(res.code).to eql(200)
      expect(res.status).to eql("OK")

      expect(res).to be_an_instance_of AsposeHtml::FileDetailsResponse
      expect(res.code).to be_an_instance_of Integer
      expect(res.status).to be_an_instance_of String
      expect(res.file_details).to be_an_instance_of Array
      expect(res.file_details[0]).to be_an_instance_of AsposeHtml::FileDetail
    end
  end
end
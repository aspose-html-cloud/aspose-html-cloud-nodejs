# -*- coding: utf-8 -*-
=begin
  --------------------------------------------------------------------------------------------------------------------
  <copyright company="Aspose" file="model_spec.rb">
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
require 'date'

describe 'Test models' do

  describe 'DiscUsage' do
    before(:all) do
      # run before all test
      @instance1 = AsposeHtml::DiscUsage.new({UsedSize: 100, TotalSize: 200})
      @instance2 = AsposeHtml::DiscUsage.new({UsedSize: 100, TotalSize: 200})
      @instance3 = AsposeHtml::DiscUsage.new({UsedSize: 200, TotalSize: 300})
    end

    it 'should create an instance of DiscUsage' do
      expect(@instance1).to be_instance_of(AsposeHtml::DiscUsage)
      expect(@instance2).to be_instance_of(AsposeHtml::DiscUsage)
      expect(@instance3).to be_instance_of(AsposeHtml::DiscUsage)
    end

    it 'check class names' do
      expect(@instance1.used_size).to be_instance_of(Integer)
      expect(@instance2.used_size).to be_instance_of(Integer)
      expect(@instance3.used_size).to be_instance_of(Integer)

      expect(@instance1.total_size).to be_instance_of(Integer)
      expect(@instance2.total_size).to be_instance_of(Integer)
      expect(@instance3.total_size).to be_instance_of(Integer)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:UsedSize)).to be true
      expect(dictionary.has_key?(:TotalSize)).to be true
      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'DiscUsageResponse' do
    before(:all) do
      # run before all test
      disc_usage1 = AsposeHtml::DiscUsage.new({UsedSize: 100, TotalSize: 200})
      disc_usage2 = AsposeHtml::DiscUsage.new({UsedSize: 100, TotalSize: 200})
      disc_usage3 = AsposeHtml::DiscUsage.new({UsedSize: 200, TotalSize: 300})
      @instance1 = AsposeHtml::DiscUsageResponse.new( {Code: 200, Status: "OK", DiscUsage: disc_usage1})
      @instance2 = AsposeHtml::DiscUsageResponse.new( {Code: 200, Status: "OK", DiscUsage: disc_usage2})
      @instance3 = AsposeHtml::DiscUsageResponse.new( {Code: 200, Status: "OK", DiscUsage: disc_usage3})
    end

    it 'should create an instance of DiscUsageResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::DiscUsageResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::DiscUsageResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::DiscUsageResponse)
    end

    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)

      expect(@instance1.disc_usage).to be_instance_of(AsposeHtml::DiscUsage)
      expect(@instance2.disc_usage).to be_instance_of(AsposeHtml::DiscUsage)
      expect(@instance3.disc_usage).to be_instance_of(AsposeHtml::DiscUsage)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true
      expect(dictionary.has_key?(:DiscUsage)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'FileExist' do
    before(:all) do
      # run before all test
      @instance1 = AsposeHtml::FileExist.new({IsExist: false, IsFolder: false})
      @instance2 = AsposeHtml::FileExist.new({IsExist: false, IsFolder: false})
      @instance3 = AsposeHtml::FileExist.new({IsExist: true, IsFolder: false})
    end

    it 'should create an instance of FileExist' do
      expect(@instance1).to be_instance_of(AsposeHtml::FileExist)
      expect(@instance2).to be_instance_of(AsposeHtml::FileExist)
      expect(@instance3).to be_instance_of(AsposeHtml::FileExist)
    end

    it 'check class names' do
      expect(@instance1.is_exist).to be false
      expect(@instance2.is_exist).to be false
      expect(@instance3.is_exist).to be true

      expect(@instance1.is_folder).to be false
      expect(@instance2.is_folder).to be false
      expect(@instance3.is_folder).to be false
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:IsExist)).to be true
      expect(dictionary.has_key?(:IsFolder)).to be true
      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'FileExistResponse' do
    before(:all) do
      # run before all test
      f1 = AsposeHtml::FileExist.new({IsExist: false, IsFolder: false})
      f2 = AsposeHtml::FileExist.new({IsExist: false, IsFolder: false})
      f3 = AsposeHtml::FileExist.new({IsExist: true, IsFolder: false})

      @instance1 = AsposeHtml::FileExistResponse.new({Code: 200, Status: "OK", FileExist: f1})
      @instance2 = AsposeHtml::FileExistResponse.new({Code: 200, Status: "OK", FileExist: f2})
      @instance3 = AsposeHtml::FileExistResponse.new({Code: 200, Status: "OK", FileExist: f3})
    end

    it 'should create an instance of FileExistResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::FileExistResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::FileExistResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::FileExistResponse)
    end

    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)

      expect(@instance1.file_exist).to be_instance_of(AsposeHtml::FileExist)
      expect(@instance2.file_exist).to be_instance_of(AsposeHtml::FileExist)
      expect(@instance3.file_exist).to be_instance_of(AsposeHtml::FileExist)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true
      expect(dictionary.has_key?(:FileExist)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'FileDetail' do
    before(:all) do
      # run before all test
      time_now = DateTime.now.to_s
      @instance1 = AsposeHtml::FileDetail.new({Name: 'test', IsFolder: false, ModifiedDate: time_now,
                                                Size: 100, Path: '~/user/test_path'})
      @instance2 = AsposeHtml::FileDetail.new({Name: 'test', IsFolder: false, ModifiedDate: time_now,
                                                Size: 100, Path: '~/user/test_path'})
      @instance3 = AsposeHtml::FileDetail.new({Name: 'test', IsFolder: true, ModifiedDate: time_now,
                                                Size: 100, Path: '~/user/test_path'})
    end

    it 'should create an instance of FileDetail' do
      expect(@instance1).to be_instance_of(AsposeHtml::FileDetail)
      expect(@instance2).to be_instance_of(AsposeHtml::FileDetail)
      expect(@instance3).to be_instance_of(AsposeHtml::FileDetail)
    end

    it 'check class names' do
      expect(@instance1.name).to be_instance_of(String)
      expect(@instance2.name).to be_instance_of(String)
      expect(@instance3.name).to be_instance_of(String)

      expect(@instance1.is_folder).to be false
      expect(@instance2.is_folder).to be false
      expect(@instance3.is_folder).to be true

      expect(@instance1.modified_date).to be_instance_of(String)
      expect(@instance2.modified_date).to be_instance_of(String)
      expect(@instance3.modified_date).to be_instance_of(String)

      expect(@instance1.size).to be_instance_of(Integer)
      expect(@instance2.size).to be_instance_of(Integer)
      expect(@instance3.size).to be_instance_of(Integer)

      expect(@instance1.path).to be_instance_of(String)
      expect(@instance2.path).to be_instance_of(String)
      expect(@instance3.path).to be_instance_of(String)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Name)).to be true
      expect(dictionary.has_key?(:IsFolder)).to be true
      expect(dictionary.has_key?(:ModifiedDate)).to be true
      expect(dictionary.has_key?(:Size)).to be true
      expect(dictionary.has_key?(:Path)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'FileVersion' do
    before(:all) do
      # run before all test
      time_now = DateTime.now.to_s
      @instance1 = AsposeHtml::FileVersion.new({VersionId: "1.0.1", IsLatest: false, Name: 'test',
                                                   IsFolder: false, ModifiedDate: time_now, Size: 100, Path: '/'})
      @instance2 = AsposeHtml::FileVersion.new({VersionId: "1.0.1", IsLatest: false, Name: 'test',
                                                   IsFolder: false, ModifiedDate: time_now, Size: 100, Path: '/'})
      @instance3 = AsposeHtml::FileVersion.new({VersionId: "1.0.1", IsLatest: true, Name: 'test',
                                                   IsFolder: true, ModifiedDate: time_now, Size: 100, Path: '/'})
    end

    it 'should create an instance of FileVersion' do
      expect(@instance1).to be_instance_of(AsposeHtml::FileVersion)
      expect(@instance2).to be_instance_of(AsposeHtml::FileVersion)
      expect(@instance3).to be_instance_of(AsposeHtml::FileVersion)
    end

    it 'check class names' do
      expect(@instance1.version_id).to be_instance_of(String)
      expect(@instance2.version_id).to be_instance_of(String)
      expect(@instance3.version_id).to be_instance_of(String)

      expect(@instance1.is_latest).to be false
      expect(@instance2.is_latest).to be false
      expect(@instance3.is_latest).to be true

      expect(@instance1.name).to be_instance_of(String)
      expect(@instance2.name).to be_instance_of(String)
      expect(@instance3.name).to be_instance_of(String)

      expect(@instance1.is_folder).to be false
      expect(@instance2.is_folder).to be false
      expect(@instance3.is_folder).to be true

      expect(@instance1.modified_date).to be_instance_of(String)
      expect(@instance2.modified_date).to be_instance_of(String)
      expect(@instance3.modified_date).to be_instance_of(String)

      expect(@instance1.size).to be_instance_of(Integer)
      expect(@instance2.size).to be_instance_of(Integer)
      expect(@instance3.size).to be_instance_of(Integer)

      expect(@instance1.path).to be_instance_of(String)
      expect(@instance2.path).to be_instance_of(String)
      expect(@instance3.path).to be_instance_of(String)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:VersionId)).to be true
      expect(dictionary.has_key?(:IsLatest)).to be true
      expect(dictionary.has_key?(:Name)).to be true
      expect(dictionary.has_key?(:IsFolder)).to be true
      expect(dictionary.has_key?(:ModifiedDate)).to be true
      expect(dictionary.has_key?(:Size)).to be true
      expect(dictionary.has_key?(:Path)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'FileVersionsResponse' do
    before(:all) do
      # run before all test
      time_now = DateTime.now.to_s
      v1 = AsposeHtml::FileVersion.new({VersionId: "1.0.1", IsLatest: false, Name: 'test',
                                                   IsFolder: false, ModifiedDate: time_now, Size: 100, Path: '/'})
      v2 = AsposeHtml::FileVersion.new({VersionId: "1.0.1", IsLatest: false, Name: 'test',
                                                   IsFolder: false, ModifiedDate: time_now, Size: 100, Path: '/'})
      v3 = AsposeHtml::FileVersion.new({VersionId: "2.0.1", IsLatest: false, Name: 'test',
                                                   IsFolder: false, ModifiedDate: time_now, Size: 100, Path: '/'})
      v4 = AsposeHtml::FileVersion.new({VersionId: "3.0.1", IsLatest: true, Name: 'test',
                                                   IsFolder: false, ModifiedDate: time_now, Size: 100, Path: '/'})

      @instance1 = AsposeHtml::FileVersionsResponse.new({Code: 200, Status: "OK", FileVersions: [v1, v2, v3] })
      @instance2 = AsposeHtml::FileVersionsResponse.new({Code: 200, Status: "OK", FileVersions: [v1, v2, v3] })
      @instance3 = AsposeHtml::FileVersionsResponse.new({Code: 200, Status: "OK", FileVersions: [v1, v2, v4] })
    end

    it 'should create an instance of FileVersionsResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::FileVersionsResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::FileVersionsResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::FileVersionsResponse)
    end


    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)

      expect(@instance1.file_versions).to be_instance_of(Array)
      expect(@instance2.file_versions).to be_instance_of(Array)
      expect(@instance3.file_versions).to be_instance_of(Array)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true
      expect(dictionary.has_key?(:FileVersions)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'FileDetailsResponse' do
    before(:all) do
      # run before all test
      time_now = DateTime.now.to_s
      v1 = AsposeHtml::FileDetail.new({Name: 'test', IsFolder: false, ModifiedDate: time_now,
                                       Size: 100, Path: '/'})
      v2 = AsposeHtml::FileDetail.new({Name: 'test', IsFolder: false, ModifiedDate: time_now,
                                       Size: 100, Path: '/'})
      v3 = AsposeHtml::FileDetail.new({Name: 'test', IsFolder: false, ModifiedDate: time_now,
                                       Size: 100, Path: '/'})
      v4 = AsposeHtml::FileDetail.new({Name: 'test', IsFolder: true, ModifiedDate: time_now,
                                       Size: 100, Path: '/'})

      @instance1 = AsposeHtml::FileDetailsResponse.new({Code: 200, Status: "OK", Files: [v1, v2, v3] })
      @instance2 = AsposeHtml::FileDetailsResponse.new({Code: 200, Status: "OK", Files: [v1, v2, v3] })
      @instance3 = AsposeHtml::FileDetailsResponse.new({Code: 200, Status: "OK", Files: [v1, v2, v4] })
    end

    it 'should create an instance of FileVersionsResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::FileDetailsResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::FileDetailsResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::FileDetailsResponse)
    end


    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)

      expect(@instance1.file_details).to be_instance_of(Array)
      expect(@instance2.file_details).to be_instance_of(Array)
      expect(@instance3.file_details).to be_instance_of(Array)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true
      expect(dictionary.has_key?(:Files)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'MoveFileResponse' do
    before(:all) do
      # run before all test
      @instance1 = AsposeHtml::MoveFileResponse.new({Code: 200, Status: "OK"})
      @instance2 = AsposeHtml::MoveFileResponse.new({Code: 200, Status: "OK"})
      @instance3 = AsposeHtml::MoveFileResponse.new({Code: 403, Status: "Forbidden"})
    end

    it 'should create an instance of MoveFileResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::MoveFileResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::MoveFileResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::MoveFileResponse)
    end


    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'MoveFolderResponse' do
    before(:all) do
      # run before all test
      @instance1 = AsposeHtml::MoveFolderResponse.new({Code: 200, Status: "OK"})
      @instance2 = AsposeHtml::MoveFolderResponse.new({Code: 200, Status: "OK"})
      @instance3 = AsposeHtml::MoveFolderResponse.new({Code: 403, Status: "Forbidden"})
    end

    it 'should create an instance of MoveFolderResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::MoveFolderResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::MoveFolderResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::MoveFolderResponse)
    end


    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'RemoveFileResponse' do
    before(:all) do
      # run before all test
      @instance1 = AsposeHtml::RemoveFileResponse.new({Code: 200, Status: "OK"})
      @instance2 = AsposeHtml::RemoveFileResponse.new({Code: 200, Status: "OK"})
      @instance3 = AsposeHtml::RemoveFileResponse.new({Code: 403, Status: "Forbidden"})
    end

    it 'should create an instance of MoveFolderResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::RemoveFileResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::RemoveFileResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::RemoveFileResponse)
    end


    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'RemoveFolderResponse' do
    before(:all) do
      # run before all test
      @instance1 = AsposeHtml::RemoveFolderResponse.new({Code: 200, Status: "OK"})
      @instance2 = AsposeHtml::RemoveFolderResponse.new({Code: 200, Status: "OK"})
      @instance3 = AsposeHtml::RemoveFolderResponse.new({Code: 403, Status: "Forbidden"})
    end

    it 'should create an instance of RemoveFolderResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::RemoveFolderResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::RemoveFolderResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::RemoveFolderResponse)
    end


    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'MessageResponse' do
    before(:all) do
      # run before all test
      @instance1 = AsposeHtml::MessageResponse.new({Code: 200, Status: "OK"})
      @instance2 = AsposeHtml::MessageResponse.new({Code: 200, Status: "OK"})
      @instance3 = AsposeHtml::MessageResponse.new({Code: 403, Status: "Forbidden"})
    end

    it 'should create an instance of MessageResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::MessageResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::MessageResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::MessageResponse)
    end


    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)
    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end

  describe 'StorageExistResponse' do
    before(:all) do
      f1 =
      # run before all test
      f1 = AsposeHtml::FileExist.new({IsExist: false, IsFolder: false})
      f2 = AsposeHtml::FileExist.new({IsExist: false, IsFolder: false})
      f3 = AsposeHtml::FileExist.new({IsExist: true, IsFolder: false})

      @instance1 = AsposeHtml::StorageExistResponse.new({Code: 200, Status: "OK", IsExist: f1})
      @instance2 = AsposeHtml::StorageExistResponse.new({Code: 200, Status: "OK", IsExist: f2})
      @instance3 = AsposeHtml::StorageExistResponse.new({Code: 403, Status: "Forbidden", IsExist: f3})
    end

    it 'should create an instance of StorageExistResponse' do
      expect(@instance1).to be_instance_of(AsposeHtml::StorageExistResponse)
      expect(@instance2).to be_instance_of(AsposeHtml::StorageExistResponse)
      expect(@instance3).to be_instance_of(AsposeHtml::StorageExistResponse)
    end

    it 'check class names' do
      expect(@instance1.code).to be_instance_of(Integer)
      expect(@instance2.code).to be_instance_of(Integer)
      expect(@instance3.code).to be_instance_of(Integer)

      expect(@instance1.status).to be_instance_of(String)
      expect(@instance2.status).to be_instance_of(String)
      expect(@instance3.status).to be_instance_of(String)

      expect(@instance1.is_exist).to be_instance_of(AsposeHtml::FileExist)
      expect(@instance2.is_exist).to be_instance_of(AsposeHtml::FileExist)
      expect(@instance3.is_exist).to be_instance_of(AsposeHtml::FileExist)


    end

    it 'check compare and keys' do
      dictionary = @instance3.to_hash
      expect(dictionary.has_key?(:Code)).to be true
      expect(dictionary.has_key?(:Status)).to be true
      expect(dictionary.has_key?(:IsExist)).to be true

      expect(@instance1).to eql(@instance2)
      expect(@instance1).not_to eql(@instance3)
    end
  end
end
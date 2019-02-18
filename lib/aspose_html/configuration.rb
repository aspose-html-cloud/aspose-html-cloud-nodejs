# -*- coding: utf-8 -*-
=begin
  --------------------------------------------------------------------------------------------------------------------
  <copyright company="Aspose" file="configuration.rb">
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

require 'uri'
require 'tmpdir'
require 'json'
require 'typhoeus'


module AsposeHtml
  class Configuration


    # Defines the access token (Bearer) used with OAuth2.
    attr_accessor :access_token

    # Defines the logger used for debugging.
    # Default to `Rails.logger` (when in Rails) or logging to STDOUT.
    #
    # @return [#debug]
    attr_accessor :logger

    # Defines the temporary folder to store downloaded files
    # (for API endpoints that have file response).
    # Default to use `Tempfile`.
    #
    # @return [String]
    attr_accessor :temp_folder_path

    # The time limit for HTTP request in seconds.
    # Default to 0 (never times out).
    attr_accessor :timeout

    # Set this to false to skip client side validation in the operation.
    # Default to true.
    # @return [true, false]
    attr_accessor :client_side_validation

    ### TLS/SSL setting
    # Set this to false to skip verifying SSL certificate when calling API from https server.
    # Default to true.
    #
    # @note Do NOT set it to false in production code, otherwise you would face multiple types of cryptographic attacks.
    #
    # @return [true, false]
    attr_accessor :verify_ssl

    ### TLS/SSL setting
    # Set this to false to skip verifying SSL host name
    # Default to true.
    #
    # @note Do NOT set it to false in production code, otherwise you would face multiple types of cryptographic attacks.
    #
    # @return [true, false]
    attr_accessor :verify_ssl_host

    ### TLS/SSL setting
    # Set this to customize the certificate file to verify the peer.
    #
    # @return [String] the path to the certificate file
    #
    # @see The `cainfo` option of Typhoeus, `--cert` option of libcurl. Related source code:
    # https://github.com/typhoeus/typhoeus/blob/master/lib/typhoeus/easy_factory.rb#L145
    attr_accessor :ssl_ca_cert

    ### TLS/SSL setting
    # Client certificate file (for client certificate)
    attr_accessor :cert_file

    ### TLS/SSL setting
    # Client private key file (for client certificate)
    attr_accessor :key_file

    # Set this to customize parameters encoding of array parameter with multi collectionFormat.
    # Default to nil.
    #
    # @see The params_encoding option of Ethon. Related source code:
    # https://github.com/typhoeus/ethon/blob/master/lib/ethon/easy/queryable.rb#L96
    attr_accessor :params_encoding

    attr_accessor :inject_format

    attr_accessor :force_ending_format

    def initialize(params)
      self.class.class_eval {attr_accessor *params.keys}
      params.each {|key,value| send("#{key}=",value)}

      @timeout = 0
      @temp_folder_path = Dir.tmpdir()
      @access_token = req_token
      @client_side_validation = true
      @verify_ssl = true
      @verify_ssl_host = true
      @params_encoding = nil
      @cert_file = nil
      @key_file = nil
      @inject_format = false
      @force_ending_format = false
      @logger = defined?(Rails) ? Rails.logger : Logger.new(STDOUT)

      yield(self) if block_given?
    end

    # The default Configuration object.
    def self.default(args)
      @@default ||= Configuration.new(args)
    end

    def configure
      yield(self) if block_given?
    end

    def base_url
      url = @basePath
      URI.encode(url)
    end

    # Request token
    def req_token
      tries = 0
      begin
        Typhoeus::Config.user_agent = "Aspose SDK"
        tries += 1
        response = Typhoeus::Request.new(@authPath,
                                         method: :post,
                                         body: {grant_type: "client_credentials",
                                                client_id: @appSID,
                                                client_secret: @apiKey
                                         },
                                         headers: {Accept: "application/json",
                                                   ContentType: "application/x-www-form-urlencoded"
                                         },
                                         verbose: @debug
        ).run
        hash = JSON.parse(response.body, symbolize_names: true)
        hash[:access_token]
      rescue => ex
        puts "#{ex.class}: #{ex.message}"
        puts "Try connect - #{tries}"
        if (tries<5)
          sleep(2**tries)
          retry
        end
        raise "Can not connect to server #{@authPath}"
      end
    end
  end
end


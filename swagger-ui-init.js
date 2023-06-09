
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.3",
    "info": {
      "title": "PPM Cortex | API Industrialization 1.0",
      "description": "This PPM Cortex API exposed by MarkLogic using DHF, is comprised of services.  A service has a (unique) name, a set of supported HTTP verbs (GET, POST, PUT, DELETE), a set of parameters, a result body and a request body (for POST and PUT.)\n\n_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_\n\nFacilitator Services:\n- GET token\n- GET sources\n\nData Services:\n\n- GET projects\n- GET project\n- GET portfolios\n- GET portfolio\n- GET taskLists\n- GET taskList\n- GET tasks\n- GET task\n- GET phases (milestone)\n- GET phase (milestone)\n\nThe following services can be developed in a subsequent iteration\n- GET defects\n- GET defect\n\n\n`Availability of services`\n\nServices defined below are not available for all sources. Table below summarizes on which source services can be called.\n_Ex:_ Get portfolios can be called for E7. If end user call this API for Zoho, empty value is retrieved\n\n<table>\n  <tr>\n    <td>|</td>\n    <td>API Name</td>\n    <td>|</td>\n    <td>E7</td>\n    <td>|</td>\n    <td>Zoho</td>\n    <td>|</td>\n    <td>V1</td>\n    <td>|</td>\n    <td>Jira</td>\n    <td>|</td>\n    <td>UPDEV</td>\n    <td>|</td>\n    <td>UP3P</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET portfolios</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET portfolio</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET projects</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET project</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET taskLists</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET taskList</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET tasks</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET task</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET phases</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET phase</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET defects</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n  </tr>\n  <tr>\n    <td>|</td>\n    <td>GET defect</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>Yes</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n    <td>No</td>\n    <td>|</td>\n  </tr>\n</table>\n\n`Parameters`\n\nFor end user, it’s mandatory to enter  either URI OR ID AND source \nDefinition of the parameters used in the services.\n\n- _URI_ ->  An URI to point to a specific document. It must be unique ID\n- _ID_ ->  An ID to point to a specific entity.\n- _Source ID_ ->  The ID of an entity in the source system.  The parameter is named from the source code, + \"Id\".  For instance, \"zohoId\" is the ID in Zoho for a project coming from Zoho.\n- _Multi-values_ ->  When a parameter is flagged as “multivalue,” it means it can accept several values.  The values are passed as a comma-separated list.  For instance, “123” and “456” are passed as “123,456.”\n\n`Services`\n\nIn MarkLogic, using DHF, we deploy a set of services.  We list here each combination of verb and service name.\n\n- _Temporal_ -> API retrieve” latest” data.  For now, no filter is set up on historical data.\n- _Parameters_  ->  For end user, it’s mandatory to enter  either URI OR ID AND source ",
      "termsOfService": "http://swagger.io/terms/",
      "contact": {
        "email": "apippmteam@airbus.com"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0.0"
    },
    "externalDocs": {
      "description": "Find out more about Cortex",
      "url": "https://ppm-cortex-front.2s95-ppmcortex.aws.cloud.airbus-v.corp"
    },
    "servers": [
      {
        "url": "https://ppm-cortex-front.2s95-ppmcortex.aws.cloud.airbus-v.corp/api/v1"
      }
    ],
    "tags": [
      {
        "name": "ppm-cortex-api",
        "description": "PPM Cortex API for Planisware",
        "externalDocs": {
          "description": "Find out more about cortex api documentation",
          "url": "https://ppm-cortex-front.2s95-ppmcortex.aws.cloud.airbus-v.corp"
        }
      }
    ],
    "paths": {
      "/sources": {
        "get": {
          "tags": [
            "ppm-cortex-api"
          ],
          "summary": "Get all sources available in Cortex",
          "description": "Return all sources in PPM.  Each source has an ID and a name.",
          "operationId": "getSources",
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Requester is not authorized"
            },
            "404": {
              "description": "Sources not found"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
      "/portfolios": {
        "get": {
          "tags": [
            "ppm-cortex-api"
          ],
          "summary": "This API retrieves all information present in the PortfolioWP entity.",
          "description": "Return all portfolios in PPM.  Each portfolio has an ID and a name.Only available with E7, UP3P and UPDEV.",
          "operationId": "getPortfolios",
          "parameters": [
            {
              "name": "source",
              "in": "query",
              "description": "filter only portfolios from that source, mandatory, monovalue.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Requester is not authorized"
            },
            "404": {
              "description": "Sources not found"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
      "/portfolio": {
        "get": {
          "tags": [
            "ppm-cortex-api"
          ],
          "summary": "Return a specific portfolioWP in PPM, given its ID.",
          "description": "Return all portfolios in PPM. Each portfolio has an ID and a name. Only available with E7, UP3P and UPDEV.",
          "operationId": "getPortfolio",
          "parameters": [
            {
              "name": "source",
              "in": "query",
              "description": "filter only portfolios from that source, mandatory, monovalue.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "portfolioWPSourceId",
              "in": "query",
              "description": "the ID of the portfolioWP to return, mandatory, monovalue",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "portfolioWPUri",
              "in": "query",
              "description": "filter only portfolio uri from that source, mandatory, monovalue",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Requester is not authorized"
            },
            "404": {
              "description": "Sources not found"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
      "/projects": {
        "get": {
          "tags": [
            "ppm-cortex-api"
          ],
          "summary": "Get all projects available in PPM",
          "description": "This API retrieves all information present in the Project entity in PPM.  Each source has an ID and a name.",
          "operationId": "getProjects",
          "parameters": [
            {
              "name": "source",
              "in": "query",
              "description": "filter only projects from that source, mandatory, monovalue",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "projectPortfolioWPSourceId",
              "in": "query",
              "description": "filter only projects part of that portfolio,mandatory ,monovalue",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Requester is not authorized"
            },
            "404": {
              "description": "Sources not found"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
      "/project": {
        "get": {
          "tags": [
            "ppm-cortex-api"
          ],
          "summary": "Get all projects available in PPM",
          "description": "This API retrieves all information present in the Project entity in PPM.  Each source has an ID and a name.",
          "operationId": "getProject",
          "parameters": [
            {
              "name": "source",
              "in": "query",
              "description": "filter only projects from that source, mandatory, monovalue",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "projectPortfolioWPSourceId",
              "in": "query",
              "description": "filter only projects part of that portfolio,mandatory ,monovalue",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                },
                "application/xml": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pet"
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Bad Request"
            },
            "401": {
              "description": "Requester is not authorized"
            },
            "404": {
              "description": "Sources not found"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
      "/pet/{petId}": {
        "get": {
          "tags": [
            "ppm-cortex-api"
          ],
          "summary": "Find pet by ID",
          "description": "Returns a single pet",
          "operationId": "getPetById",
          "parameters": [
            {
              "name": "petId",
              "in": "path",
              "description": "ID of pet to return",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Pet"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Pet not found"
            }
          },
          "security": [
            {
              "api_key": []
            },
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      }
    },
    "components": {
      "schemas": {
        "Pet": {
          "required": [
            "name",
            "photoUrls"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 10
            },
            "name": {
              "type": "string",
              "example": "doggie"
            },
            "category": {
              "$ref": "#"
            },
            "photoUrls": {
              "type": "array",
              "xml": {
                "wrapped": true
              },
              "items": {
                "type": "string",
                "xml": {
                  "name": "photoUrl"
                }
              }
            },
            "tags": {
              "type": "array",
              "xml": {
                "wrapped": true
              },
              "items": {
                "$ref": "#"
              }
            },
            "status": {
              "type": "string",
              "description": "pet status in the store",
              "enum": [
                "available",
                "pending",
                "sold"
              ]
            }
          },
          "xml": {
            "name": "pet"
          }
        },
        "ApiResponse": {
          "type": "object",
          "properties": {
            "code": {
              "type": "integer",
              "format": "int32"
            },
            "type": {
              "type": "string"
            },
            "message": {
              "type": "string"
            }
          },
          "xml": {
            "name": "##default"
          }
        }
      },
      "requestBodies": {
        "Pet": {
          "description": "Pet object that needs to be added to the store",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            }
          }
        },
        "UserArray": {
          "description": "List of user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#"
                }
              }
            }
          }
        }
      },
      "securitySchemes": {
        "petstore_auth": {
          "type": "oauth2",
          "flows": {
            "implicit": {
              "authorizationUrl": "https://ppmcortex.api.com/oauth/authorize",
              "scopes": {
                "write:pets": "modify pets in your account",
                "read:pets": "read your pets"
              }
            }
          }
        },
        "api_key": {
          "type": "apiKey",
          "name": "api_key",
          "in": "header"
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}

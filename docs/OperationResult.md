# OperationResult

## Properties
| Name            | Type       | Description                                                                     | Notes                                                   |
|-----------------|------------|---------------------------------------------------------------------------------|---------------------------------------------------------|
| **code**        | **Number** | HTTP result code.                                                               |                                                         |
| **id**          | **String** | Id of conversion.                                                               |                                                         |
| **status**      | **String** | Conversion's status ("pending", "running", "completed", "faulted", "canceled"). |                                                         |
| **description** | **String** | Description of error.                                                           |                                                         |
| **links**       | **Array**  | Reserved.                                                                       |                                                         |
| **file**        | **String** | Full path to the result file.                                                   | If more than one, it's a zip file with the result files |
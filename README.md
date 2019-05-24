#### SURVEY QUESTIONNAIRE FOR ENDOCRINOLOGISTS
------------------------------------------

Here we have a JSON file consisting of an array of objects.

- The main parameters consist of:
	 1. "key" - the name attribute
     2. "text" - the label of the input field
	 3. "type" - the question type

- Meaning to the "type" parameters are: 
	1. "question-number" - type number
	2. "question-100-breakdown" - breakdown the options to different fields and their values should add up to 100
	3. "question-percent" - type percentage
	4. "question-group" - group of questions under the same question.
	5. "question-arrange-options" - drag and drop question.

-------------------------------------------------------------------------------------------------------------------

### TASK LEVELS

 1. Create an application that can be fed with this JSON and populate a survey.
 
 2. Ensure the doctors fill in the questions before proceeding to the next question.
 
 3. On completing the survey, log a JSON object of the answers filled in by the doctor to the browser.

Here's an example of a JSON structure to be logged on the browser:
```
{
	"years-in-practice": 6,
	"next-100-patient-breakdown": {
		"t1dm": 30,
		"t2dm": 40,
		"none": 30
	},
	"percent-t2dm-managed-by-other-doc-before": 23,
	"primary-reason-for-transfer-of-care": ["uncontrolled-diabetes", "complex-diabetes", "reduced-medical-liability", "patient-request"],
	"t2dm-complications": {
		"retinopathy": 34,
		"nephropathy": 23,
		"cerebrovascular-disease": 41,
		"cad": 22,
		"peripheral-arterial-occlusive-disease": 55
	}
    ```
	...
}

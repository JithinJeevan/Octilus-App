import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFirstPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [jobData, setJobData] = useState({
    id: "",
    job_title: "",
  });

  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const [showJob, setShowJob] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
    if (event.target.checked && name === "gender") {
      setFormData({ ...formData, gender: value });
      if (value === "male") {
        setMaleChecked(true);
        setFemaleChecked(false);
      }
      if (value === "female") {
        setFemaleChecked(true);
        setMaleChecked(false);
      }
    }
  };
  const handleJobInput = async (event) => {
    const { value, name } = event.target;
    console.log(value, name);

    setJobData({ ...jobData, [name]: value });
    if (event.target.checked && name === "terms") {
      setTermsChecked(true);
    } else {
      setTermsChecked(false);
    }
  };

  const handleNext = async () => {
   const result =  axios.post("https://dev.octilus.in/api/create.php",formData).then((res)=>{
    setJobData({ ...jobData,id: res.data.id });

    setShowJob(true);
    return res.data
   })
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    const result =  axios.post("https://dev.octilus.in/api/update.php",jobData).then((res)=>{
      setIsLoading(false)
     
 if(res.data.success===true){
  setShowSuccess(true);

 }
     return res.data
    })
   };

  return {
    formData,
    maleChecked,
    femaleChecked,
    handleInput,
    showJob,
    setShowJob,
    handleJobInput,
    termsChecked,jobData,
    handleNext,
    isLoading,
    showSuccess,
    handleSubmit
  };
};

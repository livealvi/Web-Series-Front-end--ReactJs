import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import service from "../../api/service";
import useInput from "../../Hooks/userInput";
import { MutatingDots } from "react-loader-spinner";

const UserEdit = () => {
  const [allData, setAllData] = useState(null);
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loginId, setLoginId] = useState("");
  const [loginTime, setLoginTime] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [accountCreateTime, setAccountCreateTime] = useState("");
  const [dob, setDob] = useState("");
  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(
      name,
      email,
      password,
      role,
      loginId,
      loginTime,
      address1,
      address2,
      accountCreateTime,
      dob,
      status,
      phone,
      userId
    );

    const { data: response } = await service.put(`/user/edit`, {
      Id: userId,
      Phone: phone,
      DOB: dob,
      Address1: address1,
      Address2: address2,
      Status: status,
      AccountCreateTime: accountCreateTime,
      LoginTime: loginTime,
      LoginId: loginId,
      Name: name,
      Email: email,
      Password: password,
      Role: role,
    });
    console.log(response);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data: response } = await service.get(`/user/${id}`);
        setUser(response);

        setUserId(response.Id);
        setName(response.Name);
        setEmail(response.Email);
        setPassword(response.Password);
        setRole(response.Role);
        setLoginId(response.LoginId);
        setLoginTime(response.LoginTime);
        setAddress1(response.Address1);
        setAddress2(response.Address2);
        setDob(response.DOB);
        setStatus(response.Status);
        setAccountCreateTime(response.AccountCreateTime);
        setPhone(response.Phone);

        setIsLoaded(true);
        console.table(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (!isLoaded)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  return (
    <>
      <div className="user_detail">
        <div className=" d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="user_detail_box d-flex flex-column align-items-center w-50">
            <div className=" d-flex justify-content-evenly">
              {" "}
              <div>{"Profile"}</div>
              <div></div>
            </div>
            <div className="d-flex  w-100">
              <div className="w-75 me-15">
                <div className="pt-2 pb-2 ps-2 pe-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue={user.Name}
                    onChange={(e) =>
                      setName((v) => ({ ...v, name: e.target.value }))
                    }
                  />
                </div>
                <div className="pt-2 pb-2 ps-2 pe-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    defaultValue={user.Email}
                    type="email"
                    name="email"
                    placeholder=""
                    onChange={(e) =>
                      setEmail((v) => ({ ...v, email: e.target.value }))
                    }
                  />
                </div>
                <div className="pt-2 pb-2 ps-2 pe-2">
                  <Form.Label>Present Address</Form.Label>
                  <Form.Control
                    defaultValue={user.Address1}
                    type="text"
                    placeholder=""
                    name="address1"
                    onChange={(e) =>
                      setAddress1((v) => ({ ...v, address1: e.target.value }))
                    }
                  />
                </div>
                <div className="pt-2 pb-2 ps-2 pe-2">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    defaultValue={user.DOB}
                    type="text"
                    placeholder=""
                    name="dob"
                    onChange={(e) =>
                      setDob((v) => ({ ...v, dob: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className=" w-75 ">
                <div className="pt-2 pb-2 ps-2 pe-2">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    defaultValue={user.Role}
                    type="text"
                    placeholder=""
                    name="role"
                    onChange={(e) =>
                      setRole((v) => ({ ...v, role: e.target.value }))
                    }
                  />
                </div>
                <div className="pt-2 pb-2 ps-2 pe-2">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    defaultValue={user.Phone}
                    type="text"
                    placeholder=""
                    name="phone"
                    onChange={(e) =>
                      setPhone((v) => ({ ...v, phone: e.target.value }))
                    }
                  />
                </div>
                <div className="pt-2 pb-2 ps-2 pe-2">
                  <Form.Label>Permanent Address</Form.Label>
                  <Form.Control
                    defaultValue={user.Address2}
                    type="text"
                    placeholder=""
                    name="address2"
                    onChange={(e) =>
                      setAddress2((v) => ({ ...v, address2: e.target.value }))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-start">
              <div>
                <Button onClick={handleFormSubmit}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEdit;

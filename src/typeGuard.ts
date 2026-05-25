//instanceof অপারেটরটি মূলত Class (ক্লাস) এর ক্ষেত্রে ব্যবহার করা হয়। এটি চেক করে যে কোনো একটি অবজেক্ট নির্দিষ্ট কোনো ক্লাসের ব্লুপ্রিন্ট থেকে তৈরি (instance) হয়েছে কিনা।

class Car {
  drive() {
    console.log("car is running");
  }
}

class Bike {
  ride() {
    console.log("bike is running");
  }
}

// এখানে vehicle-এর টাইপ Car অথবা Bike হতে পারে
function startVehicle(vehicle: Car | Bike) {
  // vehicle.drive() সরাসরি লিখলে TypeScript এরর দেবে, কারণ Bike-এর drive নেই।
  
  if (vehicle instanceof Car) {
    // এই ব্লকের ভেতরে TypeScript নিশ্চিত যে vehicle হলো একটি Car অবজেক্ট
    vehicle.drive(); 
  } else {
    // যেহেতু Car না, তাই TypeScript বুঝে নিয়েছে এটি অবশ্যই Bike
    vehicle.ride();
  }
}

const myCar = new Car();
startVehicle(myCar); // 


// in অপারেটরটি মূলত Object বা Interface (ইন্টারফেস) এর ক্ষেত্রে ব্যবহার করা হয়। এটি চেক করে যে কোনো একটি নির্দিষ্ট প্রোপার্টি (Property) বা চাবি (Key) ওই অবজেক্টের ভেতরে বিদ্যমান আছে কিনা।

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and his rolwe is : ${user.role}`);
  } else {
    console.log(` ${user.name}`);
  }
};

getUserInfo({ name: "Normal", role: "Admin" });
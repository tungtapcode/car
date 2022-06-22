import React, { Component } from "react";
export default class Car extends Component {
    srcCar = "./img/car/products/black-car.jpg";
    handleClick(color) {
        // e.preventDefault();
        // chan su kien cua trang
        console.log("handleClick run", color);
        switch (color) {
            case "black":
                this.srcCar = "./img/car/products/black-car.jpg";
                break;
            case "red":
                this.srcCar = "./img/car/products/red-car.jpg";
                break;
            case "silver":
                this.srcCar = "./img/car/products/silver-car.jpg";
                break;
            case "silver":
                this.srcCar = "./img/car/products/steel-car.jpg";
                break;
            default:
                this.srcCar = "./img/car/products/black-car.jpg";
                break;
        }
        this.forceUpdate();
        // gia tri thay doi nhung ui ko doi thi dung
    }
    render() {
        return (
             <section className="show-room">
                    <h2 className="text-center">Chọn Màu Xe</h2>
                    <div className="container">
                        <div className="chose__color d-flex justify-content-around">
                            <button className="btn" onClick={() => this.handleClick("black")}>
                                <img
                                    src="./img/car/icons/icon-black.jpg"
                                    alt="hinh"
                                    style={{ width: 50 }}
                                />
                            </button>
                            <button className="btn" onClick={() => this.handleClick("red")}>
                                <img
                                    src="./img/car/icons/icon-red.jpg"
                                    alt="hinh"
                                    style={{ width: 50 }}
                                />
                            </button>
                            <button className="btn" onClick={() => this.handleClick("silver")}>
                                <img
                                    src="./img/car/icons/icon-silver.jpg"
                                    alt="hinh"
                                    style={{ width: 50 }}
                                />
                            </button>
                            <button className="btn" onClick={() => this.handleClick("steel")}>
                                <img
                                    src="./img/car/icons/icon-steel.jpg"
                                    alt="hinh"
                                    style={{ width: 50 }}
                                />
                            </button>
                        </div>
                        <div className="car mt-2">
                            <img
                                className="img-thumbnail"
                                src= {this.srcCar}
                                alt="hinh"
                            />
                        </div>
                    </div>
             </section>
            );
    }
    
}
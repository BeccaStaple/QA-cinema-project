import React from "react";
import '../index.css';
import { Table, Container } from "react-bootstrap";


export default function OpeningTimes() {
    return (
        <div class="table-spacing-centre" style={{width:"25%"}}>
            <div>
                <Container className="opening-table">
                    <Table striped bordered hover variant="dark" className="OpenTable" size="sm">

                        <thead>
                            <tr>
                                <td colSpan="2">Opening</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Mon</th>
                                <th>9.00 - 22.00</th>
                            </tr>
                            <tr>
                                <th style={{width:"8.33%"}}>Tue</th>
                                <th style={{width:"8.33%"}}>9.00 - 22.00</th>
                            </tr>
                            <tr>
                                <th style={{width:"8.33%"}}>Wed</th>
                                <th style={{width:"8.33%"}}>9.00 - 22.00</th>
                            </tr>
                            <tr>
                                <th style={{width:"8.33%"}}>Thu</th>
                                <th style={{width:"8.33%"}}>9.00 - 22.00</th>
                            </tr>
                            <tr>
                                <th style={{width:"8.33%"}}>Fri</th>
                                <th style={{width:"8.33%"}}>9.00 - 22.00</th>
                            </tr>
                            <tr>
                                <td style={{width:"8.33%"}}>Sat</td>
                                <td style={{width:"8.33%"}}>9.00 - 22.00</td>
                            </tr>
                            <tr>
                                <td style={{width:"8.33%"}}>Sun</td>
                                <td style={{width:"8.33%"}}>9.00 - 22.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>

    );
}
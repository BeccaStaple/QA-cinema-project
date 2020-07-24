import React from "react";
import '../index.css';
import {Table, Container} from "react-bootstrap";


export default function OpeningTimes() {
    return (
        <div class="table-spacing">
            <Container>
                <Table size="md" variant="dark">
                    <tbody>
                        <tr>
                            <th colSpan="2">OPENING TIMES</th>
                        </tr>
                        <tr>
                        <td>MON</td>
                        <td>9:00 - 22:00</td>
                        </tr>
                        <tr>
                        <td>TUE</td>
                        <td>9:00 - 22:00</td>
                        </tr>
                        <tr>
                        <td>WED</td>
                        <td>9:00 - 22:00</td>
                        </tr>
                        <tr>
                        <td>THU</td>
                        <td>9:00 - 22:00</td>
                        </tr>
                        <tr>
                        <td>FRI</td>
                        <td>9:00 - 22:00</td>
                        </tr>
                        <tr>
                        <td>SAT</td>
                        <td>9:00 - 22:00</td>
                        </tr>
                        <tr>
                        <td>SUN</td>
                        <td>Closed</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
        
    );
}
import React from 'react';

const Workers = (props) => {
    const { name, area, w_img, experience, gender } = props.info;

    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={w_img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                        <div class="text-sm opacity-50">{area}</div>
                    </div>
                </div>
            </td>
            <td>
                {experience} years
                <br />
                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{gender}</td>
            <th>
                <button class="btn btn-ghost btn-xs">send request</button>
            </th>
        </tr>
    );
};

export default Workers;
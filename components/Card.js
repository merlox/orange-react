/**
 * Usage:
 *     <Card [all-optional-properties]>
 *         <CardHeader></CardHeader>
 *         <CardBody></CardBody>
 *         <CardFooter></CardFooter>
 *     </Card>
 *
 * Attributes:
 *     full OR full="true" OR full="false"
 *
 * The footer can have the property:
 *     clickable OR clickable="true" OR clickable="false"
 *
 * Example:
 *     <Card>
 *         <CardHeader>
 *             <h3>This is the header</h3>
 *         </CardHeader>
 *         <CardBody>
 *             This is the card body.
 *         </CardBody>
 *          <CardFooter>
 *             This is the card footer
 *         </CardFooter>
 *     </Card>
 */

import React from 'react'

export default function Card (props) {
    let className = "card"
    if (props.full && props.full != 'false') className += " card--full"
    return (
        <div className={className} {...props}>{props.children}</div>
    )
}

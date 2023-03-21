import { useMemo } from "react";

type ContactCardProps = {
    name: string;
    nickName?: string;
    phone: string;
};

// A contact card component!
// Note that we destructed the props object into three variables.
// Thus, we can use the variables directly in the function body.
//
// Additionally, we can track only `name` and `nickName` as dependencies
// in the `useMemo` hook, since `phone` is not used in the memoized value.
// Thus, if `phone` changes, the memoized value will not be needlessly updated.
// How cool is that?
//
const ContactCard = ({ name, nickName, phone }: ContactCardProps) => {
    // Memoize preferred title: nickName if provided, name otherwise.
    // Only update the memoized value if the props change.
    const title = useMemo(() => {
        // Check that a) a nickname was provided, and b) it is not an empty string.
        if (nickName !== undefined && nickName !== "") {
            return nickName;
        } else {
            return name;
        }
    }, [name, nickName]);

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li>Phone: {phone}</li>
            </ul>
        </div>
    );
};

export type { ContactCardProps };
export default ContactCard;

import React from "react";

import { Container, Header, BackButton, ContentContainer } from "./style";
import SimpleButton from "../../components/SimpleButton";

function ChangePage(props) {
    const goBack = () => props.history.goBack();

    const userList = [
        228, 230, 232, 273, 276,
        315, 339, 341, 342,
        476, 477, 479, 486, 488, 490, 492, 494, 495, 496,
        504, 505, 509, 511, 512, 513, 518, 519, 520, 527, 530, 532, 534, 535, 536, 537, 538, 
        540, 542, 544, 546, 547, 552, 570, 574, 580, 581, 582, 583, 585,
        633, 635, 636, 642, 644, 650, 653, 654, 655, 656, 658, 661, 662, 664, 665, 667, 668, 672, 673, 
        705, 720, 732, 760, 768, 796, 797, 799, 
        800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 811, 812, 813,
        1001, 1002, 1003, 1004, 1008, 1009, 1011, 1012, 1013, 1015, 1016, 1018, 1019, 
        1020, 1021, 1022, 1026, 1027, 1028, 1029, 1030, 1032, 1033, 1034, 1036, 1037, 1039, 
        1040, 1042, 1043, 1045, 1046, 1047, 1048, 1050, 1052, 1053, 1054, 1055, 1056, 1057, 1059, 1061, 1062,
        30016, 30035, 30038, 30039, 30040, 30041, 30043, 30044, 30045, 30046, 30047, 30048, 30049,
        30050, 30052, 30053, 30055, 30056, 30058, 30059, 30061, 30062, 30063, 30064, 30066, 30067, 30069,
        30070, 30071, 30072, 30073, 30074, 30075, 30076, 30077, 30078, 30079
    ];

    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
            </Header>
            <ContentContainer>
                {userList.map((user, index) => <SimpleButton key={index} onClick={() => props.history.replace(`/${user}/summary`)}>{user}번</SimpleButton>)}
            </ContentContainer>
        </Container>
    );
}

export default ChangePage;

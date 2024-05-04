import styles from "./../styles/logo.module.css";
import { NavLink } from "react-router-dom";

export default function Logo({
    color = "black",
    size = 100,
    marginLeft = "0",
}) {
    return (
        <NavLink to="/">
            <div
                className={styles.logo}
                style={{
                    width: `${size + 150}px`,
                    height: `${size}px`,
                    marginLeft,
                }}
            >
                <h1
                    style={{ color: color, fontSize: `${0.4 * size}px` }}
                    className={styles["logo-text"]}
                >
                    Luthien
                </h1>
                <svg
                    style={{ fill: color }}
                    className={styles["logo-svg"]}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.756 192.756"
                >
                    <g fillRule="evenodd" clipRule="evenodd">
                        <path
                            fill="transparent"
                            d="M0 0h192.756v192.756H0V0z"
                        />
                        <path d="M43.659 62.664l5.452-.885L43.704 61l.792-1.873-1.517 1.009-.858-5.29-.78 5.41-1.662-1.105.794 1.879-5.402.877 5.351.771-.792 1.874 1.59-1.057.867 5.345.774-5.366 1.586 1.054-.788-1.864zM64.368 39.292l5.452-.885-5.407-.779.791-1.872-1.516 1.008-.858-5.289-.78 5.41-1.662-1.106.794 1.879-5.402.877 5.351.771-.792 1.875 1.59-1.057.867 5.345.774-5.367 1.586 1.055-.788-1.865zM80.639 16.322l5.452-.885-5.407-.78.792-1.872-1.517 1.008-.858-5.289-.779 5.41-1.663-1.105.795 1.879-5.403.876 5.352.771-.792 1.875 1.589-1.057.867 5.345.774-5.366 1.586 1.054-.788-1.864zM114.662 16.322l5.451-.885-5.406-.78.791-1.872-1.516 1.008-.859-5.289-.779 5.41-1.662-1.105.795 1.879-5.403.876 5.352.771-.793 1.875 1.59-1.057.867 5.345.773-5.366 1.586 1.054-.787-1.864zM131.229 39.292l5.451-.885-5.407-.779.791-1.872-1.515 1.008-.86-5.289-.779 5.41-1.662-1.106.795 1.879-5.402.877 5.351.771-.793 1.875 1.59-1.057.867 5.345.774-5.367 1.586 1.055-.787-1.865zM152.232 62.664l5.454-.885-5.409-.779.793-1.873-1.517 1.009-.858-5.29-.779 5.41-1.662-1.105.793 1.879-5.402.877 5.351.771-.791 1.874 1.59-1.057.867 5.345.774-5.366 1.585 1.054-.789-1.864zM95.939 42.132c.127-.064.268-.107.412-.141.073.798.193 1.49.344 1.912.046-.178.092-.348.138-.519.04.15.08.297.12.453.137-.38.247-.983.321-1.684.146 2.786.377 5.554.619 8.323h.078v-10.55c.25-.59.535-1.187.885-1.816 1.152-2.076 2.742-3.982 3.791-6.097.949-1.917 1.49-3.443 1.684-5.551.107-1.15.354-5.149 2.141-5.026v-.119a1.517 1.517 0 0 0-1.039.149c-1.311.752-1.701 3.486-1.934 4.845-.373 2.187-1.48 3.737-2.611 5.592-1.076 1.762-3.057 3.035-4.044 4.781l-.003-.006c-.975-1.777-2.99-3.058-4.078-4.84-1.131-1.855-2.239-3.404-2.613-5.592-.232-1.359-.622-4.093-1.933-4.845a1.523 1.523 0 0 0-1.04-.149v.119c1.788-.123 2.034 3.876 2.141 5.027.195 2.107.735 3.634 1.685 5.551 1.048 2.114 2.639 4.02 3.791 6.097.275.496.513.971.723 1.439.16 2.463.127 10.994.127 10.994h.042c.017-2.628.028-5.258.028-7.892l.225-.455zM94.834 49.955c-1.047-1.129-2.064-2.482-3.105-3.564-2.533-2.631-7.838-3.441-9.704-3.865-1.956-.444-3.497-2.612-1.503-4.55 1.317-1.28 3.687-.483 3.655 1.286.148.011-.376 1.706.417.006.115-.904-.543-1.66-1.23-2.175-1.038-.778-1.091-.439-2.201-.165-1.413.351-2.13-.114-2.967-1.223-1.109-1.47-1.403-2.765-3.167-3.644-1.656-.825-3.387-.746-5.186-.787 1.018.693 5.186.293 6.995 3.014.434.654.806 1.462 1.219 2.101.877 1.357.661 3.535 1.213 5.345.604 1.979 2.749 2.094 4.567 2.442 2.401.46 5.327 1.276 6.909 3.084 1.004 1.146 1.76 2.353 2.503 3.691.679 1.22 1.29 3.924 2.391 4.979.016-1.633.027-3.267.038-4.901-.288-.378-.566-.776-.844-1.074zM100.57 50.952c.744-1.337 1.5-2.544 2.504-3.69 1.582-1.808 4.508-2.625 6.91-3.084 1.816-.348 3.963-.464 4.566-2.442.553-1.81.336-3.988 1.213-5.345.414-.639.785-1.447 1.219-2.101 1.811-2.721 5.979-2.321 6.996-3.013-1.799.041-3.529-.039-5.186.786-1.764.879-2.059 2.174-3.168 3.645-.836 1.108-1.553 1.573-2.967 1.223-1.109-.275-1.164-.614-2.201.165-.688.515-1.346 1.271-1.23 2.175.795 1.699.27.005.418-.006-.031-1.769 2.338-2.566 3.654-1.286 1.994 1.938.453 4.106-1.502 4.55-1.865.424-7.172 1.234-9.705 3.865-1.041 1.082-2.059 2.436-3.105 3.565-.334.36-.67.862-1.023 1.302.131 1.498.264 2.996.387 4.499.996-1.159 1.578-3.652 2.22-4.808zM61.018 51.79h.072a.31.31 0 0 1-.072-.137v.137zM95.141 72.004c-.683-.479-1.265-.978-1.771-1.65-.472-.627-.961-1.057-1.394-1.698-.216-.32-.493-.578-.716-.855-.743-.924-1.583-1.657-2.691-2.119-1.766-.736-3.985-.597-5.844-1.063a5.758 5.758 0 0 0-.877-.139 5.405 5.405 0 0 0-.195-.214l-.077-.078c-2.49-.009-2.935-4.386-2.188-5.985.455-.974.941-1.805 1.009-2.941.073-1.216-.274-2.489 1.16-2.852 1.944-.492 4.096.784 4.065 2.863.764-1.09-1.016-3.029-1.972-3.463-.691-.313-1.694-.336-2.462-.25-.798.09-1.028.478-1.626.938-1.716-1.393-1.859-3.201-1.859-5.276 0-2.347-.412-3.806-3.013-4.406.429 1.132 2.024 1.322 2.242 2.779.196 1.306-.231 2.608-.296 3.874-.067 1.317.41 2.384 1.167 3.409.66.894 1.301 1.905 1.144 3.101-.281 2.15-1.788 4.421-1.105 6.754.192.66.666 1.474 1.16 2.018-1.033.127-2.021.144-3.213-.233-.997-.315-2.071-.836-2.953-1.385-1.514-.942-3.041-1.385-3.849-3.1-1.221-2.591-1.761-5.331-4.179-7.077-.967-.699-2.51-1.216-3.718-1.165.331.411 1.745.891 2.195 1.099.972.451 1.628.953 2.251 1.854 1.34 1.938 1.137 4.18 2.077 6.317.524 1.192 1.459 2.29 2.438 3.163.398.354.84.79 1.273 1.085.596.407 1.245.316 1.943.513 1.437.405 2.968.562 4.506.599 3.761.092 8.775-.664 11.255 2.87 1.002 1.429 1.747 2.766 3.122 3.864.802.641 1.606 1.23 2.305 1.99.256.279.565.931.946 1.253.016-1.393.034-2.783.051-4.174-.085-.064-.186-.133-.311-.22zM99.547 75.145c.697-.759 1.502-1.349 2.303-1.99 1.377-1.099 2.121-2.436 3.123-3.864 2.479-3.534 7.492-2.778 11.254-2.87 1.539-.037 3.07-.194 4.506-.599.699-.197 1.348-.106 1.943-.513.434-.296.877-.731 1.273-1.085.98-.873 1.916-1.971 2.439-3.163.939-2.137.736-4.379 2.076-6.317.623-.901 1.279-1.403 2.25-1.854.451-.208 1.865-.688 2.197-1.099-1.209-.051-2.752.466-3.719 1.165-2.418 1.747-2.959 4.486-4.178 7.077-.809 1.715-2.336 2.157-3.85 3.1-.881.549-1.957 1.07-2.953 1.385-1.193.377-2.18.361-3.213.233.494-.544.967-1.358 1.16-2.018.682-2.333-.824-4.604-1.105-6.754-.156-1.196.484-2.208 1.145-3.101.758-1.025 1.234-2.092 1.166-3.409-.064-1.266-.492-2.568-.297-3.874.219-1.457 1.814-1.646 2.242-2.779-2.602.6-3.012 2.059-3.012 4.406 0 2.075-.145 3.883-1.859 5.276-.6-.46-.83-.847-1.627-.938-.768-.086-1.771-.064-2.463.25-.955.434-2.734 2.373-1.971 3.463-.031-2.079 2.121-3.354 4.064-2.863 1.434.363 1.088 1.635 1.16 2.852.068 1.137.555 1.968 1.01 2.941.746 1.599.301 5.976-2.189 5.985l-.076.078a4.243 4.243 0 0 0-.195.214 5.758 5.758 0 0 0-.877.139c-1.859.466-4.078.327-5.844 1.063-1.109.462-1.949 1.195-2.691 2.119-.223.277-.5.535-.717.855-.432.642-.922 1.071-1.395 1.698-.506.672-1.086 1.171-1.77 1.65l-.006.003a256.616 256.616 0 0 1-.07 4.207c.299-.344.551-.836.766-1.069zM132.982 51.653a.304.304 0 0 1-.07.137h.07v-.137z" />
                        <path d="M93.636 59.079c-1.054-1.219-3.014-2.384-4.653-1.925-1.692.474-2.571 2.589-2.175 4.247.23.963 1.424 2.561 2.4 2.755-.243-.472-.985-.603-1.271-1.217-.245-.523-.316-1.3-.364-1.887-.132-1.653.691-2.689 2.428-2.428 1.371.207 3.07 1.27 3.702 2.534.688 1.379.715 3.002 1.689 4.223.048.061.096.117.142.171l.038-3.025c-.764-.814-1.405-2.833-1.936-3.448zM99.982 61.158c.633-1.265 2.332-2.328 3.703-2.534 1.736-.261 2.561.774 2.428 2.428-.047.586-.119 1.364-.363 1.887-.287.614-1.029.745-1.271 1.217.977-.194 2.17-1.792 2.398-2.755.396-1.657-.48-3.772-2.174-4.247-1.639-.459-3.598.706-4.652 1.925-.379.439-.814 1.593-1.311 2.515.047.951.082 1.905.105 2.863.471-1.051.612-2.246 1.137-3.299zM99.342 93.352c.117-.179.234-.351.355-.512.77-1.027 1.57-1.708 2.727-2.268 1.264-.611 2.316-1.482 3.799-1.332 3.898.395 1.865 4.419.545 6.371-.896 1.321-1.748 2.354-.904 4 .486.953 2.262 2.359 3.373 1.596-3.428-.71-2.844-4.175-.965-6.326.807-.924 1.883-2.107 1.773-3.434-.045-.552-.223-1.235-.506-1.867 1.389.494 2.662 1.302 3.771 2.412 1.625 1.625 2.861 3.884 3.264 6.133.277 1.537.922 4.214-.117 5.583-2.02 2.659-5.891-.835-3.6-3.129-.318.059-.678.622-1.004.648-1.104 1.586.477 3.519 1.928 4.195.873.408 2.396.34 3.133-.356.449-.425.387-1.346.848-1.582.092.873.996 2.141 1.584 2.839 1.311 1.554 2.512 1.893 4.561 1.87 1.186-.014 2.332-.126 2.738-1.354.176-.531.381-1.462-.6-2.724.428 1.78-.58 3.017-2.84 2.743-4.053-.491-4.928-4.822-5.195-8.119-.184-2.291-.77-4.62-2.26-6.437-.969-1.181-1.779-1.909-2.988-2.69-1.297-.839-2.527-1.867-4.109-2.042-.049-.005-.094-.005-.141-.009-.936-.412-1.818-.457-2.908-.35-1.398.138-3.049-.163-4.387.453-.947.436-1.463 1.292-1.992 2.141.086 1.174.136 2.354.117 3.547z" />
                        <path d="M149.443 70.38c-3.9-1.532-9.381-2.94-13.17-.384-3.428 2.314-4.287 6.448-8.203 8.16-1.256.549-2.578.807-3.938.878-.096-.58.301-1.161.605-1.728.977-1.815 1.174-3.847 1.268-5.894.096-2.091-.334-4.686.84-6.522.865-1.353 3.23-1.846 4.672-1.104 1.457.75 1.143 2.121.799 3.198 1.557-.824.277-4.217-1.256-4.468-.988-.162-2.646-.02-3.564.509a4.52 4.52 0 0 0-1.416 1.303c-1.076 1.502-.736 3.024-.975 4.76-.623-.498-.957-.905-1.871-.861-.857.042-1.574.655-1.973 1.375-.549.991-.727 3.751 1.082 3.047-2.049-.147-.264-5.125 1.746-3.118.438.437.488.999.523 1.579a17.18 17.18 0 0 1-.305 4.221c-.27 1.307-1.154 2.665-2.172 3.686-3.816-.243-7.803-1.549-11.336-1.855a26.559 26.559 0 0 0-.91-.06c.057-.08.113-.16.168-.244.729-1.12.652-2.362 1.646-3.287.889-.827 1.584-1.652 2.959-1.502 1.533.167 1.543 1.352 1.842 2.53.65-.427.109-1.632-.156-2.148-.639-1.239-1.166-1.332-2.688-1.18-.961.096-1.754.476-2.391 1.215-.494.574-.611 1.252-1.086 1.801-.469-.974-.959-1.849-2.301-1.586-.504.099-1.164.378-1.328.889-.15.472.127 1.074.627 1.095-.592-.556-.287-1.45.535-1.528.861-.082 1.309.855 1.377 1.593.111 1.195-.59 2.06-1.701 2.372-3.008.203-5.99 1.115-7.9 3.377-.338.399-.625.787-.871 1.173-.006-.594 0-1.19.029-1.791.057-1.221.098-2.443.131-3.667.037-1.402.057-2.805.07-4.207.018-1.743.025-3.484.025-5.217a117.724 117.724 0 0 0-.138-5.197 183.022 183.022 0 0 0-.391-5.837c-.123-1.503-.256-3.001-.387-4.499l-.07-.781c-.242-2.77-.473-5.538-.619-8.323-.074.7-.184 1.303-.321 1.684-.04-.155-.08-.303-.12-.453-.046.171-.092.341-.138.519-.151-.422-.271-1.114-.344-1.912a1.773 1.773 0 0 0-.412.141l-.227.453c0 2.634-.012 5.264-.028 7.892l-.004.553c-.011 1.634-.022 3.268-.038 4.901a2914.412 2914.412 0 0 1-.109 9.622l-.083 6.672c-.017 1.391-.035 2.781-.051 4.174-.023 1.931-.044 3.867-.063 5.806a11.178 11.178 0 0 0-.687-.901c-1.687-1.999-4.212-2.943-6.852-3.277a40.274 40.274 0 0 0-2.861-.9c-1.12-.308-1.828-1.176-1.716-2.377.068-.738.517-1.675 1.377-1.593.823.078 1.127.972.535 1.528.501-.021.777-.623.627-1.095-.163-.51-.823-.79-1.326-.889-1.343-.263-1.833.612-2.301 1.586-.476-.549-.593-1.227-1.087-1.801-.637-.739-1.43-1.119-2.391-1.215-1.521-.152-2.048-.06-2.687 1.18-.266.516-.807 1.721-.157 2.148.301-1.178.31-2.364 1.843-2.53 1.375-.149 2.07.676 2.958 1.502.995.925.917 2.167 1.646 3.287.282.433.596.809.941 1.123-3.778.354-8.06 1.812-12.094 1.877l.007-.03c-1.373-1.017-2.754-2.801-3.103-4.496a17.124 17.124 0 0 1-.304-4.221c.034-.581.085-1.143.521-1.579 2.011-2.006 3.796 2.971 1.747 3.118 1.81.704 1.631-2.056 1.083-3.047-.399-.72-1.116-1.334-1.974-1.375-.915-.044-1.249.363-1.871.861-.237-1.736.101-3.258-.975-4.76a4.51 4.51 0 0 0-1.416-1.303c-.918-.528-2.575-.671-3.563-.509-1.533.251-2.813 3.644-1.257 4.468-.344-1.077-.66-2.448.798-3.198 1.442-.742 3.807-.249 4.672 1.104 1.174 1.836.743 4.431.84 6.522.094 2.047.291 4.079 1.267 5.894.398.741.954 1.505.365 2.258a10.222 10.222 0 0 1-1.871-.603c-3.915-1.711-4.774-5.846-8.203-8.16-3.788-2.556-9.268-1.148-13.169.384-1.333.367-1.212.485.368.486h.192c1.017-.672 2.316-.86 3.411-1.112 1.891-.436 4.356-.068 6.151.401 2.778.727 4.04 3.551 5.656 5.623 5.274 6.762 13.888 4.413 21.453 4.09-.669.104-1.31.274-1.899.548-1.264.586-2.437.886-3.792 1.144-1.287.245-2.841.368-3.969.997-1.256.701-2.419 1.613-3.644 2.342-1.131.673-2.552 1.357-3.577 2.136a.96.96 0 0 0 .072-.176l-.163.244a3.279 3.279 0 0 0-.449.424l.005-.021c-.005.012-.017.029-.023.042a3.766 3.766 0 0 0-.325.419c-.594.445-1.317.814-1.748.94-1.235.361-2.661.392-3.676-.452-.73-.607-1.619-1.836-.962-2.775.689-.983 1.323.354.829 1.097 1.063-.497.801-2.537-.591-2.236-1.267.273-.469 2.352-1.976 1.976-1.595-.399-3.044-1.728-4.838-1.025-.797.313-1.252 1.169-.946 2.023.144.402.58.634.997.812.299.128.623.161.949.189.098-.636-2.564-1.351-.788-2.093 1.312-.549 3.145.197 4.138 1.075 1.126.995 1.609 2.257 3.242 2.642.972.229 2.096.205 3.1.054-.457.422-.897.856-1.296 1.39-.893 1.197-1.386 2.492-2.469 3.56-1.122 1.106-2.47 1.59-3.99 2.007-1.658.455-4.901 1.217-5.342-1.104-.179-.943.607-2.284 1.437-1.099.065-.922-1.304-.948-1.763-.479-.769.787-.583 1.601-.073 2.465.459.778.942 1.329 1.833 1.503.55.107 1.903-.078 2.367.328a.957.957 0 0 0-.194.193c-.297.405-.752 1.359-.889 1.887-.354 1.367.567 3.006 1.613 3.841.872.696 3.48.526 3.847-.65.345-1.104-.919-2.235-1.948-1.722.029.059.051.116.074.187.82-.095 1.597.237 1.053 1.078-.484.749-1.297.621-1.992.22-.855-.494-1.457-.891-1.466-1.918-.013-1.333.241-2.105.951-3.006 1.371-.456 3.784-1.604 4.522-2.16 1.349-1.013 2.572-2.297 3.589-3.61.104-.135.197-.275.285-.417-.194 1.446.541 2.909 1.744 3.738 1.117.77 3.701.676 4.788-.129.581-.43.994-1.261.942-1.996-.033-.475-.294-1.573-.918-1.377 1.438 1.487-.178 3.097-1.923 3.064-1.339-.025-2.488-.845-3.017-2.046-.36-.819-.637-1.578-.31-2.434.421-1.103 1.104-1.972 1.968-2.776.564-.525.942-1.31 1.593-1.732.794-.515 1.757-.609 2.533-1.178.44-.323.91-.639 1.383-.93.859-.529 1.597-.686 2.609-.917 1.054-.242 1.905-.831 2.945-1.035 1.625-.317 3.329-.345 4.908-.889.469-.162.9-.419 1.396-.492 2.816-.41 5.879-.144 8.729-.143l.19-.127c1.464.637 2.75 1.522 3.712 2.73a1481.05 1481.05 0 0 0-.038 5.601c-.004.696-.004 1.396-.006 2.094l3.682.981c-.209 2.203-.018 4.812.188 7.202.049-2.267.109-4.535.189-6.806.008-.182.008-.363.012-.544a39.358 39.358 0 0 0-.117-3.545c-.139-1.894-.357-3.773-.49-5.669.697-.911 1.576-1.642 2.574-2.227-.02.054-.041.106-.053.164l.219.145c2.85-.001 5.912-.267 8.729.143.494.072.926.33 1.395.492 1.578.544 3.283.572 4.908.889 1.039.204 1.891.793 2.945 1.035 1.012.231 1.748.389 2.607.917.473.291.943.606 1.383.93.775.569 1.738.663 2.533 1.178.65.422 1.029 1.207 1.592 1.732.865.804 1.547 1.673 1.969 2.776.328.856.051 1.615-.309 2.434-.529 1.202-1.678 2.021-3.018 2.046-1.744.032-3.361-1.578-1.922-3.064-.625-.196-.887.902-.92 1.377-.051.735.363 1.566.943 1.996 1.088.805 3.672.898 4.789.129 1.203-.829 1.938-2.291 1.742-3.738.088.142.182.281.285.417 1.018 1.313 2.24 2.598 3.59 3.61.738.556 3.15 1.704 4.523 2.16.709.9.963 1.673.949 3.006-.01 1.027-.609 1.424-1.465 1.918-.695.401-1.508.529-1.992-.22-.543-.841.232-1.173 1.053-1.078.023-.07.045-.128.074-.187-1.029-.514-2.293.618-1.947 1.722.365 1.177 2.975 1.347 3.846.65 1.047-.835 1.969-2.474 1.613-3.841-.137-.527-.592-1.481-.889-1.887a.98.98 0 0 0-.193-.193c.463-.406 1.816-.221 2.367-.328.891-.174 1.373-.725 1.832-1.503.51-.864.695-1.678-.072-2.465-.461-.47-1.83-.443-1.764.479.83-1.186 1.615.155 1.438 1.099-.441 2.32-3.686 1.559-5.344 1.104-1.52-.417-2.867-.9-3.99-2.007-1.082-1.068-1.576-2.363-2.469-3.56-.398-.534-.84-.968-1.297-1.39 1.004.15 2.129.175 3.102-.054 1.631-.385 2.115-1.647 3.24-2.642.994-.877 2.826-1.624 4.139-1.075 1.775.743-.887 1.458-.789 2.093.328-.028.65-.061.949-.189.418-.178.854-.41.998-.812.305-.854-.148-1.71-.947-2.023-1.793-.703-3.242.625-4.838 1.025-1.506.376-.709-1.702-1.975-1.976-1.393-.3-1.654 1.739-.592 2.236-.494-.743.141-2.08.828-1.097.658.939-.23 2.168-.961 2.775-1.016.844-2.441.813-3.676.452-.432-.126-1.154-.495-1.748-.939a3.777 3.777 0 0 0-.324-.421c-.008-.013-.02-.029-.023-.041l.004.021a3.263 3.263 0 0 0-.414-.397l-.033-.026-.164-.244c.016.058.043.117.072.177-1.025-.779-2.447-1.463-3.578-2.136-1.223-.729-2.387-1.641-3.643-2.342-1.129-.629-2.682-.752-3.969-.997-1.357-.258-2.529-.557-3.793-1.144-2.277-1.057-5.324-.595-7.824-.597-.186 0-.41.002-.654.011 1.65-.468 3.426-.702 5.168-.779 3.711-.166 7.836.549 11.785.652.498.167 1.117.153 1.697.001 4.053-.11 7.822-1.12 10.639-4.73 1.617-2.072 2.879-4.896 5.656-5.623 1.795-.47 4.26-.837 6.15-.401 1.096.252 2.395.44 3.412 1.112h.191c1.584-.004 1.705-.122.371-.489z" />
                        <path d="M98.953 93.499l-3.682-.981c.002-.698.002-1.398.006-2.094-.702-1.02-1.212-2.214-2.392-2.758-1.336-.615-2.988-.315-4.386-.453-1.091-.107-1.973-.062-2.908.35-.048.004-.092.003-.141.009-1.583.175-2.813 1.203-4.111 2.042-1.208.781-2.019 1.509-2.987 2.69-1.49 1.816-2.076 4.146-2.261 6.437-.267 3.297-1.143 7.628-5.195 8.119-2.26.273-3.268-.963-2.839-2.743-.98 1.262-.775 2.192-.6 2.724.405 1.229 1.552 1.341 2.737 1.354 2.049.022 3.251-.316 4.561-1.87.588-.698 1.492-1.966 1.584-2.839.46.236.398 1.157.848 1.582.736.696 2.259.765 3.132.356 1.452-.677 3.032-2.609 1.929-4.195-.328-.026-.688-.59-1.005-.648 2.292 2.294-1.579 5.788-3.599 3.129-1.04-1.369-.395-4.046-.118-5.583.403-2.249 1.639-4.508 3.264-6.133a10.154 10.154 0 0 1 3.442-2.286c-.343.688-.556 1.465-.606 2.081-.11 1.327.967 2.509 1.774 3.433 1.878 2.152 2.461 5.617-.965 6.326 1.11.765 2.885-.643 3.372-1.596.843-1.646-.009-2.678-.904-4-1.321-1.952-3.355-5.976.544-6.371 1.483-.15 2.537.721 3.799 1.332 1.156.56 1.956 1.241 2.726 2.268.218.291.429.618.631.961.574 2.482.576 4.919.576 7.72-.001 6.866-.722 13.83-1.312 20.658-.813 9.425-.598 19.039-1.315 28.462a72.303 72.303 0 0 0-.229 4.818 40.318 40.318 0 0 1-1.051 2.273c-1.571 3.195-2.646 6.938-5.754 9.02-2.183 1.461-4.941 1.409-7.07 2.985-.671.497-1.21 1.249-1.908 1.699-1.185.764-2.877 1.308-4.158 1.815-2.79 1.106-11.218 2.026-9.263 6.725.528-.489.519-1.229.931-1.771.725-.952 1.894-1.229 2.972-1.334 1.121-.109 2.308-.096 3.385-.355.925-.222 1.706-.807 2.62-1.051 4.506-1.2 2.882 3.005 2.331 5.345-.552.084-1.207 1.757-1.324 2.321-.372.225-.823.531-1.136.78 2.38-.294 3.509-2.275 5.036-4.017.977-1.113 1.236-2.936 2.497-3.873 1.616-1.2 5.259-1.564 7.28-1.312 1.172 2.081 1.714 3.28-.097 5.296 1.508-.363 1.856-.853 2.559-2.317.636-1.325 1.271-2.505 2.757-3.03 1.945-.688 3.111-.14 4.3 1.331.656.81 3.016 2.944 2.623 4.01.762.409 1.215 1.178 2.064 1.494 1.814.674 2.922.375 4.635.011-1.715.31-3.391-.352-4.133-2.117-.67-1.592-.795-3.691.773-4.696 1.525-.977 4.629-1.245 5.877.522.52.736.324 1.911-.236 2.572.693.231.838 2.855 1.551 2.634.201-1.305 2.252-4.869 3.531-4.95 1.547-.097 2.777 1.497 3.502 2.77 1.109 1.947.689 5.079 3.447 5.411-1.146-.261-1.068-2.643-1.109-3.508-.188-3.937 1.756-4.259 5.326-4.282 2.301-.016 3.34-.421 4.705 1.342.25.322.311.663.68 1.037 1.064 1.074 2.947 1.347 4.363 1.531-1.283-.209-2.83-3.313-3.613-4.334-1.291-1.688-5.836-1.51-8.225-4.213-1.348-1.523-1.562-1.078-3.736-1.194-1.186-.062-1.941-.077-2.406-.066-.238-.157-.861-.42-2.189-.842-1.744-.554-1.957-.423-3.264-1.56-.648-.563-1.111-1.082-1.664-1.724-.619-.722-1.168-1.534-1.824-2.221-.613-.64-1.691-1.122-2.188-1.819-.861-1.205-1.273-3.604-1.818-5.081-.578-1.574-1.078-3.082-1.33-4.71-.115-.743-.338-1.423-.6-2.089-.143-2.932-.299-5.865-.525-8.762-.271-3.444-.885-7.088-.684-10.452.328-5.509-1.094-10.551-1.156-16.078-.049-4.229.021-8.432-.33-12.621-.043-.529-.092-1.082-.139-1.644-.202-2.389-.394-4.999-.185-7.202z" />
                        <path d="M120.867 183.99a.94.94 0 0 0 .285.024 3.606 3.606 0 0 1-.285-.024z" />
                    </g>
                </svg>
            </div>
        </NavLink>
    );
}

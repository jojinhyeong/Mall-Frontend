import ModifyComponent from "../../components/member/modifyComponent";
import BasicLayout from "../../layout/BasicLayout";


const ModfyPage = () => {
    return (
        <BasicLayout>
            <div className=" text-3xl">Member Modify Page</div>
            <div className="bg-white w-full mt-4 p-2">
                <ModifyComponent></ModifyComponent>
            </div>
        </BasicLayout>
    );
}
export default ModfyPage;